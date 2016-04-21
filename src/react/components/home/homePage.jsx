var React = require('react');
var Slider = require('react-slick');

var HomePage = React.createClass({
  render: function() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Home</h1>

        <div className="pageContent">
          <div className="carousel">
            <Slider {...settings}>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
              <div className="carousel-item">
                <img src="../assets/images/trustpilot.png" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
