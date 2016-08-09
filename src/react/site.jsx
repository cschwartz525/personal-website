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
    console.log(this.props.location);
    console.log(this.props.route);
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
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={Site}>
      <ReactRouter.IndexRoute name='about' component={AboutPage} />
      <ReactRouter.Route name='about' path='about' component={AboutPage} />
      <ReactRouter.Route name='contact' path='contact' component={ContactPage} />
      <ReactRouter.Route name='resume' path='resume' component={ResumePage} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
document.getElementById('main'));
