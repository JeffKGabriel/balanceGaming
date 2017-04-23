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

          <div className="col-xs-12 col-xs-offset-0 col-sm-offset-2 col-sm-10 homeNewsListEntry"
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
              {this.props.title}
            </div>
            <div className="homeNewsListDate">
              {this.props.date}
            </div>
          </div>
          </div>
        </Link>
      </div>

    )
  },
});

export default HomeNewsListEntry
