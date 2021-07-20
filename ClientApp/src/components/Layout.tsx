import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <NavMenu />
                <Container>
                    {children}
                </Container>
            </React.Fragment>
        );
    }
}