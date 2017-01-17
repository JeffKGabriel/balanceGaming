var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


const HomeRosterPanel = React.createClass({



  render: function (){

    var pic = this.props.info.pic;
    //console.log("player info");
    //console.log(this.props.info);
    console.log(pic);


    return(

      <div className="homeRosterPanel">
        <Link to={{ pathname: '/PlayerProfile' , state: { scrollToTop: true } , query:{id:this.props.info.id } }} >
          <div className="homeRosterPlayerPic"
          style={{
            background : 'url(' + pic + ') no-repeat center center',
            backgroundSize : 'cover',
          }}
          >
          </div>
        </Link>
        <div className="homeRosterPlayerInfo">
          <div className="homeRosterPlayerName col-sm-12">
            {this.props.info.name}
          </div>
          <div className="homeRosterPlayerAge col-sm-12">
            <div className="col-sm-6"
                style={{
                  textAlign:'right',
                  padding: 0,
                  paddingRight:4,
                }}
            >
              Age
            </div>
            <div className="col-sm-6"
                style={{
                  textAlign:'left',
                  padding: 0,
                }}
            >
              : {this.props.info.age}
            </div>

          </div>
          <div className="homeRosterPlayerCountry">
          <div className="col-sm-6"
              style={{
                textAlign:'right',
                padding: 0,
                paddingRight:4,
              }}
          >
            Country
          </div>
          <div className="col-sm-6"
              style={{
                textAlign:'left',
                padding: 0,
              }}
          >
            : {this.props.info.country}
          </div>
          </div>
        </div>

        <div className="playerSocial">
          <div className="playerSocialIcon">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="playerSocialIcon">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </div>
          <div className="playerSocialIcon"
          style={{
            marginTop:5,
          }}
          >
            <i className="fa fa-twitch" aria-hidden="true"></i>
          </div>
        </div>

      </div>

    )

  },

});

//module.exports = HomeRosterPanel;
export default HomeRosterPanel
