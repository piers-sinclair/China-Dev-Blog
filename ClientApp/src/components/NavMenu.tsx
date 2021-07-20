import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { WithTranslation, withTranslation } from 'react-i18next';
import LanguageDropDown  from './LanguageDropDown';

type NavMenuProps =
    { isOpen: boolean }
    & WithTranslation;

class NavMenu extends React.PureComponent<NavMenuProps> {
    public state = {
        isOpen: false
    };

    public render() {
        const { t } = this.props;

        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">{t('General:websiteTitle')}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">{t('General:home')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/user-profile">{t('General:userProfile')}</NavLink>
                                </NavItem>
                                <LanguageDropDown />
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default withTranslation(['General'])(NavMenu as any);