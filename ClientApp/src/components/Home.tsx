import * as React from 'react';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';


type HomeProps =
  WithTranslation;

class Home extends React.PureComponent<HomeProps> {

  public render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t('General:websiteTitle')}</h1>
        <h2>{t('Home:body')}</h2>
      </div>
    );
  }
}

const conn = connect()(Home);

export default withTranslation(['General', 'Home'])(conn);
