var React = require('react');


const HomeNewsListEntry = React.createClass({


  render: function (){

    var BannerBG = require('../imgs/'+this.props.img+'.png');

    return(

      <div className="col-sm-12 homeNewsListEntry"
        style={{
          background : 'url(' + BannerBG + ') no-repeat center center',
        }}
      >
      <div
        style={{
          margin: '0 auto',
          height: 100,
          paddingTop: 12,
          display: 'table',

        }}
      >
        <div className="homeNewsListTitle">
          News Title
        </div>
        <div className="homeNewsListDate">
          Jan 8, 2016
        </div>
      </div>
      </div>

    )
  },
});

export default HomeNewsListEntry
