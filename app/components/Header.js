var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

    var sliderOffset = -8; //Home
    switch(props.activeTab.substring(1)){
      case "Rosters":
        sliderOffset = 63;
        break;
      case "Team":
        sliderOffset = 63;
        break;
      case "PlayerProfile":
        sliderOffset = 63;
        break;
      case "Streams":
        sliderOffset = 145;
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
      <div className="col-xs-12 animated fadeInDown siteHeader noPadding">

        <div className="col-md-offset-2 col-md-8 col-xs-12 noPadding">

          <div className="col-md-2 hidden-sm hidden-xs"
          style={{
            opacity: 0.8,
            padding:0,
          }}
          >
            <Link to={{ pathname:'/Home', state: { scrollToTop: true } }}>
              <img src={require('../imgs/Balance_Logo_B_grad.png')} style={{ height:72 , paddingTop:6}} />
            </Link>
          </div>

            <div className="headerMenu hidden-xs hidden-sm">

              <ul className="MenuUL">

                <Link to={{ pathname:'/News', state: { scrollToTop: true } }}>
                  <li>News</li>
                </Link>

                <Link to={{ pathname:'/Rosters', state: { scrollToTop: true } }}>
                  <li>Rosters</li>
                </Link>

                <Link to={{ pathname:'/Streams', state: { scrollToTop: true } }}>
                  <li>Streams</li>
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

              <div className="headerSlider hidden-xs hidden-sm"
                style={{
                  transform: 'translateX('+sliderOffset+'px)',
                }}
              >
              </div>

            </div>

            <div className="headerMenuSmall hidden-md hidden-lg hidden-xl">

              <ul className="MenuULSmall col-xs-12 col-sm-8 col-sm-offset-2 noPadding">


                <Link to={{ pathname:'/News', state: { scrollToTop: true } }}>
                  <li>News</li>
                </Link>

                <Link to={{ pathname:'/Rosters', state: { scrollToTop: true } }}>
                  <li>Rosters</li>
                </Link>

                <Link to={{ pathname:'/Streams', state: { scrollToTop: true } }}>
                  <li>Streams</li>
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

              <div className="headerSlider hidden-xs hidden-sm"
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
