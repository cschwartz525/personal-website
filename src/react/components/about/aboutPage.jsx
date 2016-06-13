var React = require('react');
var Slider = require('react-slick');

var AboutPage = React.createClass({
  displayName: 'AboutPage',
  getInitialState: function() {
    return {
      heading: '',
      summary: []
    };
  },
  componentDidMount: function() {
    $.getJSON('/api/about')
      .done(function(response) {
        this.setState(response);
      }.bind(this))
      .fail(function(err) {
        console.log('Error loading summary');
      });
  },
  render: function() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var summary = this.state.summary.map(function(line, index) {
      return (
        <p key={index} className="selfSummary">
          {line}
        </p>
      );
    });
    return (
      <div id="mainContent">
        <h1 className="pageTitle">{this.state.heading}</h1>

        <div className="pageContent">
          {summary}
          <div className="carousel">
            <Slider {...settings}>
              <div className="carousel-item">
                <img src="../assets/images/carousel/1.jpg" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/carousel/2.jpg" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/carousel/3.jpg" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/carousel/4.jpg" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/carousel/5.jpg" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AboutPage;
