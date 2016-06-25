import React from 'react';

class Footer extends React.Component {

  render() {

    const licenseHref = 'https://github.com/SMARTRACTECHNOLOGY/smartcosmos-ext-playground/blob/master/LICENSE';

    const { version } = this.props;

    const links = [{
      href: 'https://www.smart-cosmos.com/contact.html',
      display: 'Contact'
    },
    {
      href: 'https://www.smart-cosmos.com/privacy.html',
      display: 'Privacy'
    },
    {
      href: 'https://www.facebook.com/SMARTRACTECHNOLOGY',
      display: 'Facebook'
    },
    {
      href: 'https://twitter.com/SMARTRAC_NV',
      display: 'Twitter'
    },
    {
      href: 'https://www.linkedin.com/company/smartrac-technology',
      display: 'LinkedIn'
    },
    {
      href: 'https://github.com/SMARTRACTECHNOLOGY/smartcosmos-ext-playground',
      display: 'Github'
    }];

    let footerLinks = links.map( ({ href, display }, index ) =>
                                <li key={ index } className="footer__link">
                                  <a href={ href } target="_blank">
                                    { display }
                                  </a>
                                </li>
                               );

    return (
      <footer className="footer">
        <div className="container">
          <ul className="footer__links">
            { footerLinks }
          </ul>
          <p className="footer__help">
            Created as a small place to play around with the Objects v3 system
            and provide better visuals into the power of SMART COSMOS.
          </p>
          <p className="footer__help">
            Currently v{ version }. Code licensed
            <a rel="license" href={ licenseHref } target="_blank">Apache 2.0</a>
          </p>
        </div>
      </footer>
    );

  }

}

export default Footer;
