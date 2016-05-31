var React = require('react');
var Slider = require('react-slick');

var AboutPage = React.createClass({
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
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Hi, I'm Craig</h1>

        <div className="pageContent">
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
