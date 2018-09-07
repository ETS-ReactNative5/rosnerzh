import React, {Component} from 'react'
import About from './About'
import FooterMap from './FooterMap'

// Footer component;
class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="footer__wrap">
          <FooterMap />
          <About />
        </div>
      </footer>
    )
  }
}

export default Footer
