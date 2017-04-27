var React = require('react');

//var bgTiled = require('../imgs/BG_tiled.png');
//var bgTiledSmall = require('../imgs/BG_600.png')
//var bgTiledSmallLight = require('../imgs/BG_600_Lighter.png')
var bgTileBright = require('../imgs/bright_tile2.png')




const Background = (props) => (
      <div>
        <div
          className="col-xs-12 homeBackground"
          style={{
            height:1300,
          //  background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            background : 'url(' + bgTileBright + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#1f1f1f",
            opacity:0.65,
            position: 'absolute',
          }}
        >
        </div>
        <div className="col-sm-12 homeBackgroundAfter">
        </div>
      </div>
)

export default Background
