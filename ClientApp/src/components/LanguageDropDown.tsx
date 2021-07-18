import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Menu, Dropdown, Button } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

type LanguageDropDownProps =
    WithTranslation;

class LanguageDropDown extends React.PureComponent<LanguageDropDownProps> {

    public handleMenuClick(key: string) {
        switch (key) {
            case "1":
                this.props.i18n.changeLanguage('en_us');
                break;
            case "2":
                this.props.i18n.changeLanguage('zh_cn');
                break;
            default:
                this.props.i18n.changeLanguage('en_us');
                break;
        }
    }

    public render() {
        return (
            <Dropdown
                overlay={
                <Menu onClick={(e) => this.handleMenuClick(e.key)}>
                    <Menu.Item key="1">
                        English
                    </Menu.Item>
                    <Menu.Item key="2">
                        中文
                    </Menu.Item>
                </Menu>
            }>
                <Button>
                        <GlobalOutlined />
                        {this.props.t('General:language')}
                        <DownOutlined />
                </Button>
            </Dropdown>
        );
    }
}

export default withTranslation(['General'])(LanguageDropDown as any);