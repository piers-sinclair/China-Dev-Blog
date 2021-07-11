import * as UserProfile from './UserProfile';

export interface ApplicationState {
    userProfile: UserProfile.UserProfileState | undefined;
}

export const reducers = {
    userProfile: UserProfile.reducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
