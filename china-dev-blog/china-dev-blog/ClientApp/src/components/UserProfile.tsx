import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as UserProfileStore from '../store/UserProfile';
import { Card, Avatar } from "antd";
import 'antd/dist/antd.css';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

type UserProfileProps =
    UserProfileStore.UserProfileState
    & typeof UserProfileStore.actionCreators
    & RouteComponentProps<{ startDateIndex: string }>;

const { Meta } = Card;

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
                <Card
                    cover={<img alt="profile-cover-photo"
                                src={require('../images/piers-cover.jpg')}
                                className="cover-photo" />}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />
                    ]}>
                    <Meta
                        avatar={<Avatar src={require('../images/piers-avatar.jpg')} />}
                        title={this.props.userProfile.FirstName + " " + this.props.userProfile.Surname}
                        description={this.props.userProfile.JobTitle}>
                    </Meta>
                    <br/>
                    {this.props.userProfile.Description}

                </Card>
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
