var NavItem = React.createClass({
  onNavItemSelected: function() {
    return this.props.content;
  },
  render: function() {
    return (
      <div className="navItem">
        <button onClick={this.onNavItemSelected}>{this.props.content}</button>
      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navBar">
        <NavItem content='Home' onNavItemSelected={this.props.onNavChanged} />
        <NavItem content='About' onNavItemSelected={this.props.onNavChanged} />
        <NavItem content='Contact' onNavItemSelected={this.props.onNavChanged} />
      </div>
    );
  }
});

var MainContainer = React.createClass({
  render: function() {
    return (
      <div className="mainContainer">
        <h1>{this.props.selectedPanel}</h1>
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
    selectedPanel = value;
  },
  render: function() {
    return (
      <div className="site">
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
