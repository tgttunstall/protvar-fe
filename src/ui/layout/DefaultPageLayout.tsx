import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {ABOUT, CONTACT, HELP, HOME} from '../../constants/BrowserPaths'
import { API_URL, LOCAL_DOWNLOADS, DISMISS_BANNER } from '../../constants/const'

import DefaultPageContent from './DefaultPageContent'

import EMBLEBILogo from '../../images/embl-ebi-logo.svg'
import openTargetsLogo from '../../images/open-targets-logo.png'
//import SignUp from './SignUp'
interface DefaultPageLayoutProps {
  content: JSX.Element
}

function DefaultPageLayout(props: DefaultPageLayoutProps) {
  const [showBanner, setShowBanner ] =useState(true);
  let localDownloads = JSON.parse(localStorage.getItem(LOCAL_DOWNLOADS) || '[]')
  let numDownloads = localDownloads.length;
  
  useEffect(() => {
    const win: any = window
    if (win.ebiFrameworkInvokeScripts) {
      win.ebiFrameworkInvokeScripts()
    }
    const bannerDismissed = sessionStorage.getItem(DISMISS_BANNER);
    if (bannerDismissed) {
      setShowBanner(false);
    }
  }, [])

  const { content } = props;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_BANNER, 'true');
    setShowBanner(false);
  }

  return (
    <>
      <div id="skip-to">
        <a href="#content">Skip to main content</a>
      </div>

      {/* Below is the EBI master header content. Restore it if there are any concerns */}
      {/* <header id="masthead-black-bar" className="clearfix masthead-black-bar">
      <nav className="row">
        <ul id="global-nav" className="menu global-nav text-right">
          <li key="logo" className="home-mobile">
            <a href="//www.ebi.ac.uk">EMBL-EBI</a>
          </li>
          <li key="home" className="home">
            <a href="//www.ebi.ac.uk">EMBL-EBI</a>
          </li>
          <li key="services" className="services">
            <a href="//www.ebi.ac.uk/services">Services</a>
          </li>
          <li key="research" className="research">
            <a href="//www.ebi.ac.uk/research">Research</a>
          </li>
          <li key="training" className="training">
            <a href="//www.ebi.ac.uk/training">Training</a>
          </li>
          <li key="about" className="about">
            <a href="//www.ebi.ac.uk/about">About us</a>
          </li>
          <li
            id="embl-selector"
            className="float-right show-for-medium embl-selector embl-ebi active"
          >
            <button className="button float-right">&nbsp;</button>
          </li>
        </ul>
      </nav>
    </header> */}

      <div id="content" className="content">
        <div data-sticky-container>
          <div
            id="masthead"
            className="masthead"
            data-sticky
            data-sticky-on="large"
            data-top-anchor="main-content-area:top"
            data-btm-anchor="main-content-area:bottom"
          >
            <div className="masthead-inner row">
              <div className="navbar">
                <table>
                  <tbody>
                    <tr className="navbar">
                      <td>
                        <div className="logo-container">
                          <Link
                            className="local-title"
                            to={HOME}
                            title="Back to ProtVar's homepage"
                          >
                            <img
                              src="ProtVar_logo.png"
                              alt="ProtVar logo"
                              width="140px"
                            />
                          </Link>
                          <Link
                            className="sub-title"
                            to={HOME}
                            title="Back to ProtVar's homepage"
                          >
                            Contextualising human missense variation
                          </Link>
                        </div>
                      </td>
                      <div>
                        <td className="topnav-right local-sub-title">
                          <Link to={CONTACT} title="Contact us">
                            Contact
                          </Link>
                        </td>
                        <td className="topnav-right local-sub-title">
                          <Link
                            to=""
                            onClick={() =>
                              window.open(API_URL + '/docs', '_blank')
                            }
                            title="ProtVar REST API"
                            target="_blank"
                            rel="noreferrer"
                          >
                            API
                          </Link>
                        </td>
                        <td className="topnav-right local-sub-title">
                          <Link
                            // Replace with the right link
                            to={HELP}
                            title="About ProtVar's"
                            id="aboutProject"
                          >
                            Help
                          </Link>
                        </td>
                        <td className="topnav-right local-sub-title">
                          <Link
                            to={ABOUT}
                            title="About ProtVar's"
                            id="aboutProject"
                          >
                            About
                          </Link>
                        </td>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <section className="row" role="main">
          <div id="main-content-area" className="main-content-area row">
            <div className="small-12 columns">
              {showBanner && (
                <div className="banner">
                  <button
                    className="dismiss-button"
                    onClick={handleDismiss}
                  >
                    X
                  </button>
                  <div className="banner-content">
                    ProtVar will be launched on{' '}
                    <strong>Wednesday 24th May</strong> at an EMBL-EBI webinar
                    at 15:30 BST (UTC+1). We will discuss the various ways in
                    which ProtVar can help users with their work as well as
                    recent improvements and fixes. Places are limited so please
                    register to secure your place{' '}
                    <a
                      href="https://www.ebi.ac.uk/training/events/contextualise-and-interpret-human-missense-variation-protvar/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here.
                    </a>
                  </div>
                </div>
              )}

              <div className="default-page-layout">
                <DefaultPageContent downloadCount={numDownloads}>
                  {content}
                </DefaultPageContent>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer id="footer-target">
        <div className="custom-pv-footer row">
          <img
            src={EMBLEBILogo}
            loading="lazy"
            alt=""
            width="130"
            height="50"
            className='collaborator-img'
          />
          <img
            src={openTargetsLogo}
            loading="lazy"
            alt=""
            width="130"
            height="50"
            className='collaborator-img'
          />
          <SignUp />
        </div>
        <div id="global-footer" className="global-footer">
          {/* Below expanded footer content is commented for now. Restore it back if there are any concerns */}
          {/* <nav id="global-nav-expanded" className="global-nav-expanded row" /> */}
          <section id="ebi-footer-meta" className="ebi-footer-meta row" />
        </div>
      </footer>
    </>
  )
}

export default DefaultPageLayout
