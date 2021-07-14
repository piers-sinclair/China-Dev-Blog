import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

export interface UserProfileState {
    isLoading: boolean;
    userProfile: UserProfile;
}

export interface UserProfile {
    FirstName: string;
    Surname: string;
    JobTitle: string;
    Description: string;
}

interface RequestUserProfileAction {
    type: 'REQUEST_USER_PROFILE';
}

interface ReceiveUserProfileAction {
    type: 'RECEIVE_USER_PROFILE';
    userProfile: UserProfile;
}

type KnownAction = RequestUserProfileAction | ReceiveUserProfileAction;

export const actionCreators = {
    requestUserProfile: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.userProfile) {
            dispatch({ type: 'REQUEST_USER_PROFILE' });

            let url = 'UserProfile/GetUserProfile';

            fetch(url)
                .then(response => {
                    return response.json().then(data => {
                        dispatch({ type: 'RECEIVE_USER_PROFILE', userProfile: data });
                    });
                });
        }
    }
};


const unloadedState: UserProfileState = {
    userProfile: {
        FirstName: "",
        Surname: "",
        JobTitle: "",
        Description: ""
    },
    isLoading: false
};

export const reducer: Reducer<UserProfileState> = (state: UserProfileState | undefined, incomingAction: Action): UserProfileState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_USER_PROFILE':
            return {
                userProfile: state.userProfile,
                isLoading: true
            };
        case 'RECEIVE_USER_PROFILE':
            return {
                userProfile: action.userProfile,
                isLoading: false
            };
        default:
            return state;
    }
};
