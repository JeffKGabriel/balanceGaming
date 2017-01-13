var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

    var sliderOffset = 12; //Home
    switch(props.activeTab.substring(1)){
      case "News":
        sliderOffset = 78;
        break;
      case "newsPage":
        sliderOffset = 78;
        break;
      case "Rosters":
        sliderOffset = 142;
        break;
      case "PlayerProfile":
        sliderOffset = 142;
        break;
      case "Media":
        sliderOffset = 216;
        break;
      case "Partners":
        sliderOffset = 293;
        break;
      case "About":
        sliderOffset = 367;
        break;
    }

    return(
      <div className="col-sm-12 animated fadeInDown siteHeader">

        <div className="col-sm-offset-2 col-sm-8 row">

          <div className="col-sm-2">
            <Link to='/Home'>
              <img src={require('../imgs/ColorQuad.png')} style={{ height:64 , paddingTop:10}} />
            </Link>
          </div>

          <div className="headerMenu">

            <ul className="MenuUL">

              <Link to='/Home'>
                <li>Home</li>
              </Link>

              <Link to='/News'>
                <li>News</li>
              </Link>

              <Link to='/Rosters'>
                <li>Rosters</li>
              </Link>

              <Link to='/Media'>
                <li>Media</li>
              </Link>

              <Link to='/Partners'>
                <li>Partners</li>
              </Link>

              <Link to='/About'>
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


module.exports = Header;
//export default Header
