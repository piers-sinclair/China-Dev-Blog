import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Welcome to my blog about China integration!</h1>
  </div>
);

export default connect()(Home);
