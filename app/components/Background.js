var React = require('react');

var bgTiled = require('../imgs/BG_tiled.png');
var bgTiledSmall = require('../imgs/BG_600.png')
var bgTiledSmallLight = require('../imgs/BG_600_Lighter.png')




const Background = (props) => (
      <div>
        <div
          className="col-sm-12 homeBackground"
          style={{
            height:1300,
          //  background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            background : 'url(' + bgTiledSmallLight + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#1f1f1f",
            opacity:0.15,
            position: 'absolute',
          }}
        >
        </div>
        <div className="col-sm-12 homeBackgroundAfter">
        </div>
      </div>
)

export default Background
