var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/navBar');
var MainContainer = require('./components/mainContainer');
var Footer = require('./components/footer');

var Site = React.createClass({
  displayName: 'Site',
  getInitialState: function() {
    return {
      selectedPanel: 'About'
    };
  },
  onNavChanged: function(value) {
    this.setState({
      selectedPanel: value
    });
  },
  render: function() {
    return (
      <div className="site">
        <NavBar selectedItem={this.state.selectedPanel} onNavChanged={this.onNavChanged} />
        <MainContainer selectedPanel={this.state.selectedPanel} />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(<Site />, document.getElementById('main'));
