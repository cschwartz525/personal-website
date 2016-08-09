var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var NavBar = require('./components/navBar');
var MainContainer = require('./components/mainContainer');
var Footer = require('./components/footer');

var AboutPage = require('./components/about/aboutPage');
var ContactPage = require('./components/contact/contactPage');
var ResumePage = require('./components/resume/resumePage');

var Site = React.createClass({
  displayName: 'Site',
  render: function() {
    return (
      <div className="site">
        <NavBar selectedItem={this.props.location.pathname} />
        <MainContainer selectedPanel={this.props.children} />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.browserHistory}>
    <ReactRouter.Route path='/' component={Site}>
      <ReactRouter.IndexRoute component={AboutPage} />
      <ReactRouter.Route path='/about' component={AboutPage} />
      <ReactRouter.Route path='/contact' component={ContactPage} />
      <ReactRouter.Route path='/resume' component={ResumePage} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
document.getElementById('main'));
