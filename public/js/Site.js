var NavItem = React.createClass({
  hanldeClick: function(e) {
    e.preventDefault();
    this.props.onNavItemSelected(this.props.content);
  },
  render: function() {
    var style = {
      backgroundColor: '#f0f0f0'
    }

    if(this.props.content === this.props.selectedNavItem){
      style = {
        backgroundColor: '#87cefa'
      }
    }

    return (
      <div className='navItem noselect' onClick={this.hanldeClick} style={style}>
        {this.props.content}
      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <div id='navBar'>
        <img id='navBarLogo' src='assets/images/logo.png' />
        <NavItem content='Home' selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
        <NavItem content='About' selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
        <NavItem content='Contact' selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
      </div>
    );
  }
});

var MainContainer = React.createClass({
  render: function() {
    return (
      <div id='mainContainer'>
        <h1 id='pageTitle'>{this.props.selectedPanel}</h1>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div id='footer'>
        <ul class='social-icons'>
          <li className='icon icon--soundcloud'>
            <a href='https://soundcloud.com/soundcastlemusic'>
              <span className='icon__name'>Soundcloud</span>
            </a>
          </li>
          <li className='icon icon--instagram'>
            <a href='https://www.instagram.com/cschwartz525/'>
              <span className='icon__name'>Instagram</span>
            </a>
          </li>
          <li className='icon icon--facebook'>
            <a href='https://www.facebook.com/cschwartz525'>
              <span className='icon__name'>Facebook</span>
            </a>
          </li>
          <li className='icon icon--google'>
            <a href='https://plus.google.com/u/0/101927703181492899764/posts'>
              <span className='icon__name'>Google+</span>
            </a>
          </li>
          <li className='icon icon--github'>
            <a href='https://github.com/cschwartz525'>
              <span className='icon__name'>GitHub</span>
            </a>
          </li>
          <li className='icon icon--linkedin'>
            <a href='https://www.linkedin.com/in/cschwartz525'>
              <span className='icon__name'>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

var Site = React.createClass({
  getInitialState: function() {
    return {
      selectedPanel: 'Home'
    };
  },
  onNavChanged: function(value) {
    this.setState({
      selectedPanel: value
    });
  },
  render: function() {
    return (
      <div className='site'>
        <NavBar selectedItem={this.state.selectedPanel} onNavChanged={this.onNavChanged} />
        <MainContainer selectedPanel={this.state.selectedPanel} />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Site />,
  document.getElementById('site')
);
