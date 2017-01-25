var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

    var sliderOffset = 10; //Home
    switch(props.activeTab.substring(1)){
      case "News":
        sliderOffset = 76;
        break;
      case "newsPage":
        sliderOffset = 76;
        break;
      case "Rosters":
        sliderOffset = 147;
        break;
      case "Team":
        sliderOffset = 147;
        break;
      case "PlayerProfile":
        sliderOffset = 147;
        break;
      case "Media":
        sliderOffset = 221;
        break;
      case "Partners":
        sliderOffset = 297;
        break;
      case "About":
        sliderOffset = 376;
        break;
    }

    return(
      <div className="col-xs-12 animated fadeInDown siteHeader">

        <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12 row">

          <div className="col-xs-2"
          style={{
            opacity: 0.8,
            padding:0,
          }}
          >
            <Link to={{ pathname:'/Home', state: { scrollToTop: true } }}>
              <img src={require('../imgs/Balance_Logo_B_grad.png')} style={{ height:72 , paddingTop:6}} />
            </Link>
          </div>

          <div className="headerMenu">

            <ul className="MenuUL">

              <Link to={{ pathname:'/Home', state: { scrollToTop: true } }}>
                <li>Home</li>
              </Link>

              <Link to={{ pathname:'/News', state: { scrollToTop: true } }}>
                <li>News</li>
              </Link>

              <Link to={{ pathname:'/Rosters', state: { scrollToTop: true } }}>
                <li>Rosters</li>
              </Link>

              <Link to={{ pathname:'/Media', state: { scrollToTop: true } }}>
                <li>Media</li>
              </Link>

              <Link to={{ pathname:'/Partners', state: { scrollToTop: true } }}>
                <li>Partners</li>
              </Link>

              <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
                <li>About</li>
              </Link>

            </ul>

            <div className="headerSlider"
              style={{
                transform: 'translateX('+sliderOffset+'px)',
              }}
            >
            </div>

          </div>

        </div>

      </div>
    )
}

export default Header
