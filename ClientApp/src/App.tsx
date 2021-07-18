import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

import './custom.css'
import { Suspense } from 'react';

export default () => (
    <Suspense fallback="loading">
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/user-profile/:startDateIndex?' component={UserProfile} />
        </Layout>
    </Suspense>
);
