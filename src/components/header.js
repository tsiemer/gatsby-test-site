import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  constructor(props){
    super(props);

     this.state = {
        isTop: true
     }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 800;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render (props){
    return (
      <div class={this.state.isTop ? 'navbar-colorLess' : 'navbar-coloredIn'}>
        <div>
            <Link class="navbar-link siteTitle-Link" to="/" activeClassName="selected siteTitle-Link"> {this.props.siteTitle} </Link>
            <Link class="navbar-link" to="/france" activeClassName="selected">France</Link>
            <Link class="navbar-link" to="/blogs" activeClassName="selected">Blog</Link>
        </div>
      </div>
    )
  }
}

export default Header;
