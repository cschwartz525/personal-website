var NavItem = React.createClass({
  hanldeClick: function(e) {
    e.preventDefault();
    this.props.onNavItemSelected(this.props.content);
  },
  render: function() {
    var style = {
      'background-color': '#f0f0f0'
    }

    if(this.props.content === this.props.selectedNavItem){
      style = {
        'background-color': '#87cefa'
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
      </div>
    );
  }
});

ReactDOM.render(
  <Site />,
  document.getElementById('site')
);
