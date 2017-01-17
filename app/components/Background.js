var React = require('react');

const Background = (props) => (
      <div>
        <div
          className="col-sm-12 homeBackground"
          style={{
            height:1300,
            //background : 'url(' + 'https://images.unsplash.com/photo-1474518665815-99456f56c531?dpr=2&auto=format&fit=crop&w=1500&h=844' + ') no-repeat center center',
            background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#FFF",
            opacity:0.1,
            position: 'absolute',
          }}
        >
        </div>
        <div className="col-sm-12 homeBackgroundAfter">
        </div>
      </div>
)

export default Background
