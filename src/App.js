import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import "@narmi/design_system/dist/style.css";
import './i18n';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App alignChild--center--center padding--all--xxl">
        <div>
          <header className="margin--bottom--xl">
            <div className="margin--bottom--l">
              <button onClick={() => changeLanguage('de')}>de</button>
              <button onClick={() => changeLanguage('en')}>en</button>
            </div>
            <h2 className="fontSize--heading1 fontFamily--heading fontColor--heading">
              {t('title')}
            </h2>
          </header>
          <p>
            <Trans t={t} i18nKey="description_1">
              To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
          </p>
          <p>
            {t('description_2')}
          </p>
          <p>
            <Trans t={t} i18nKey="emails" values={{ unreadEmails: 5 }}>
              You have <strong>one</strong> unread email.
            </Trans>
          </p>
        </div>
      </div>
    );
  }
}

export default withTranslation('aqua')(App);
