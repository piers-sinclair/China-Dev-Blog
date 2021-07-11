import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as UserProfileStore from '../store/UserProfile';

type UserProfileProps =
  UserProfileStore.UserProfileState 
  & typeof UserProfileStore.actionCreators 
  & RouteComponentProps<{ startDateIndex: string }>; 

class UserProfile extends React.PureComponent<UserProfileProps> {

  public componentDidMount() {
    this.ensureDataFetched();
  }

  public componentDidUpdate() {
    this.ensureDataFetched();
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.userProfile.FirstName} {this.props.userProfile.Surname}<br/>
        {this.props.userProfile.JobTitle}<br/>
        {this.props.userProfile.Description}
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    this.props.requestUserProfile();
  }
}

export default connect(
  (state: ApplicationState) => state.userProfile,
  UserProfileStore.actionCreators
)(UserProfile as any); 
