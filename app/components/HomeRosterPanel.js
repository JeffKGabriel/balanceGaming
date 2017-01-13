var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


const HomeRosterPanel = React.createClass({



  render: function (){

    var pic = this.props.info.pic;
    //console.log("player info");
    //console.log(this.props.info);


    return(

      <div className="homeRosterPanel">
        <Link to={{ pathname: '/PlayerProfile' , query:{id:this.props.info.id } }} >
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
      </div>

    )

  },

});

//module.exports = HomeRosterPanel;
export default HomeRosterPanel
