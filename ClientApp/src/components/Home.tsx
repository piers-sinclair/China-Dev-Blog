import * as React from 'react';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';


type HomeProps =
  WithTranslation;

class Home extends React.PureComponent<HomeProps> {

  public render() {
    return (
      <div>
        <h1>{this.props.t('General:websiteTitle')}</h1>
        <h2>{this.props.t('Home:body')}</h2>
      </div>
    );
  }
}

const conn = connect()(Home);

export default withTranslation(['General', 'Home'])(conn);
