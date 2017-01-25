var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

const HomeNewsListEntry = React.createClass({



  render: function (){

    console.log(this.props);


    var BannerBG = require('../imgs/'+this.props.banner);

    return(

      <div>

        <Link to={{ pathname: '/NewsPage' , state: { scrollToTop: true } , query:{id:this.props.id } }} >

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
        </Link>
      </div>

    )
  },
});

export default HomeNewsListEntry
