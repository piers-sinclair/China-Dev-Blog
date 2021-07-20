import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as UserProfileStore from '../store/UserProfile';
import { Card, Avatar } from "antd";
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { WithTranslation, withTranslation } from 'react-i18next';

type UserProfileProps =
    UserProfileStore.UserProfileState
    & typeof UserProfileStore.actionCreators
    & RouteComponentProps<{ startDateIndex: string }>
    & WithTranslation;

const { Meta } = Card;
class UserProfile extends React.PureComponent<UserProfileProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }

    public render() {
        const { 
            userProfile: { 
                FirstName, 
                Surname, 
                JobTitle, 
                Description 
            } 
        } = this.props;        
        
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
                        title={FirstName + " " + Surname}
                        description={JobTitle}>
                    </Meta>
                    <br/>
                    {Description}

                </Card>
            </React.Fragment>
        );
    }


    private ensureDataFetched() {
        this.props.requestUserProfile();
    }
}

const conn = connect(
    (state: ApplicationState) => state.userProfile,
    UserProfileStore.actionCreators
)(UserProfile as any);

export default withTranslation(['General'])(conn);