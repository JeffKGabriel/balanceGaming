var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../HomeHeader.js'


import Background from '../Background.js'
import Footer from '../Footer.js'



const PlayerProfile = React.createClass({

  componentDidMount: function() {

    window.requestAnimationFrame(function() {

      setTimeout(function(){   document.getElementById("twitterEmbed").classList.toggle('myFade');    }, 2000);

        twttr.widgets.load( document.getElementById("twitterEmbed") )

    });
  },


  /*

  <div className=" col-sm-offset-1 col-sm-10 profileBio"
    style={{
      marginTop:50,
    }}
  >
    <HomeHeader fontSize="38" >
     Titles
    </HomeHeader>

    <div className="col-sm-12 profileTitlesInput">
      <div className="col-sm-2 profileTitlesTrophy">
      </div>
      <div className="col-sm-8 profileTitlesEvent">
        Apex Melee Singles
      </div>
      <div className="col-sm-2 profileTitlesYear">
        2011
      </div>
    </div>

    <div className="col-sm-12 profileTitlesInput">
      <div className="col-sm-2 profileTitlesTrophy">
      </div>
      <div className="col-sm-8 profileTitlesEvent">
        Apex Melee Singles
      </div>
      <div className="col-sm-2 profileTitlesYear">
        2011
      </div>
    </div>

    <div className="col-sm-12 profileTitlesInput">
      <div className="col-sm-2 profileTitlesTrophy">
      </div>
      <div className="col-sm-8 profileTitlesEvent">
        Apex Melee Singles
      </div>
      <div className="col-sm-2 profileTitlesYear">
        2011
      </div>
    </div>

    <div className="col-sm-12 profileTitlesInput">
      <div className="col-sm-2 profileTitlesTrophy">
      </div>
      <div className="col-sm-8 profileTitlesEvent">
        Apex Melee Singles
      </div>
      <div className="col-sm-2 profileTitlesYear">
        2011
      </div>
    </div>


  </div>


  */


  render: function(){


    var newsBanner = require('../../imgs/Intro_widebanner.jpg')

    const rightPlayer = this.props.children.passState.rosters.filter(m=> m.id==this.props.location.query.id );
    const player = rightPlayer.map((a,k)=> {
      console.log(a);
      return(
        <Player
          name={a.name}
          fullName={a.fullName}
          country={a.country}
          bio={a.bio}
          age={a.age}
          pic={a.pic}
          twitter={a.twitter}
          twitch={a.twitch}
          key={k}
        />
      )
    });

    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:100,
        }}
        >
        </div>

        <RosterBanner banner={newsBanner} />

        <div className=" col-xs-12 col-md-offset-2 col-md-8">
          {player}
        </div>

        <div className="col-sm-12 hidden-xs beforeFooter"
          style={{
            marginBottom:100,
          }}
        ></div>
        <Footer />
      </div>
    )

  },

});

const RosterBanner = (props)=>(
  <div className="col-xs-12 col-md-offset-1 col-md-10 rosterBanner"
  style={{
    background : 'url(' + props.banner + ') no-repeat center center',
    backgroundSize : 'cover',
  }}
  >
  </div>
)


const Player = (props) =>(
  <div>
    <PlayerPic pic={props.pic} />
    <PlayerInfo pic={props.pic} name={props.name} age={props.age} country={props.country} bio={props.bio} fullName={props.fullName}  />
    <PlayerSocial twitch={props.twitch} twitter={props.twitter} />

  </div>
)

const PlayerPic = (props) =>{

  let reqPic = require('../../imgs/'+props.pic);

  return(
    <div className="col-xs-12 col-sm-4 noPadding"
      style={{
        display: 'flex',
        justifyContent: 'center',
        }}
      >
      <div className="profilePic col-xs-12">
        <img className="img-responsive profileImg" src={reqPic} />
      </div>


    </div>
  )
}

const PlayerSocial = (props) =>{

  return(
    <div className="col-xs-12 col-sm-4 noPadding"
      style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}
      >

      <div className="profileSocial col-xs-12 noPadding">

        <a href={props.twitter}>
          <div className="fa fa-twitter partnerLinkIcon" aria-hidden="true">
          </div>
        </a>

        <a href={props.twitch}>
          <div className="fa fa-twitch partnerLinkIcon" aria-hidden="true"
           style={{
             marginLeft:32,
           }}
          >
          </div>
        </a>

      </div>

      <div id="twitterEmbed" className="embedTwitterProfile myFade col-xs-12">
        <a className="twitter-timeline" data-width="280" data-height="500" href={props.twitter}></a>
          <script async src="//platform.twitter.com/widgets.js" charset="utf-8">
          </script>
      </div>
    </div>
  )
}

const PlayerInfo = (props) => {
  return(
    <div className=" col-xs-12 col-sm-8 noPadding"
      style={{
        marginTop: 60,
        float: 'right',
      }}
    >
      <div className="profileTitleBackground col-sm-12">

        <div className="col-sm-11">

          <div className="col-sm-12 profileTitle">
            {props.fullName}
          </div>
          <div className="col-sm-12 profileInfo">
            {props.age} | {props.country}
          </div>
        </div>

      </div>

      <div className=" col-sm-offset-1 col-sm-10 profileBio">
        {props.bio}
      </div>

    </div>
  )
}





/*



// Map Redux state to component props
function mapStateToProps(state) {
  return {
    teams: state.rosterReducer,
  }
}

// Map Redux actions to component props

function mapDispatchToProps(dispatch) {
  return {
    //onIncreaseClick: () => dispatch(increaseAction),
    //onDecreaseClick: () => dispatch(decreaseAction)
  }
}



//export default Footer
export default connect(
  mapStateToProps
)(PlayerProfile)

*/

export default PlayerProfile
