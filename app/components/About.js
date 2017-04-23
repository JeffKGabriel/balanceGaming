var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './Footer.js'
import Background from './Background.js'

import HomeHeader from './HomeHeader.js'


const About = React.createClass({

  render: function(){

    const aboutBios = this.props.children.passState.aboutBios.map( (a,k) => {

      return(
        <AboutTeam info={a} key={k} />
      )

    });


    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:160,
        }}
        >
        </div>

        <div className="col-sm-offset-1 col-sm-10">

          <HomeHeader>About</HomeHeader>

          <div className="aboutBio col-sm-offset-1 col-sm-10">
            <p>
              Balance Gaming is an eSports startup focused primarily on the Super Smash Brothers Melee and Wii U competitive scenes, as well as competitive Overwatch. We are a passionate volunteer organization with diverse eSports and professional backgrounds whose managing members boast 20+ years of combined entrepreneurial experience with a strong background in gaming related businesses and corporate finance. Unlike many mom-&-pop startups, we employ dedicated financial and marketing staff.
            </p>
            <p>
              We believe that a strong organization not only bases its success on performance, but consists of a tight knit group of dedicated individuals that genuinely understand the reciprocal nature of collaborative effort. We endeavor to bring a heavily player focused, family-oriented vision to the eSports community, with player and member personality and marketability as the primary focus in addition to technical proficiency. Our current lineup of players reflects this attitude and sets the precedent for our vision going forward.
            </p>
          </div>

        </div>

        <div className="col-sm-offset-1 col-sm-10">

          <HomeHeader>Team</HomeHeader>

          <div className="aboutTeam col-sm-12">

            {aboutBios}

          </div>


        </div>



        <div className="col-sm-12 hidden-xs beforeFooter">
        </div>
        <Footer />
      </div>
    )
  },
});

const AboutTeam = React.createClass({


  render: function(){

    var boxPic = require('../imgs/'+this.props.info.pic);


    return(
      <div className="AboutTeamEntry overlay myColorHover"
        style={{
          background : 'url(' + boxPic + ') no-repeat center center',
          backgroundSize: '300px 300px',
          height: 300,
          height: 300,
        }}
      >
        <div className="aboutName">
          {this.props.info.name}
        </div>
        <div className="aboutTitle">
          {this.props.info.title}
        </div>

        <div className="aboutTeamFadeIn">

          <div className="aboutTeamBio">
            {this.props.info.bio}
          </div>
          <div className="aboutTeamSocial">
            <AboutSocial info={this.props.info} />
          </div>

        </div>


      </div>
    )
  }

});


const AboutSocial = React.createClass({

    render: function(){

      console.log(this.props.info);

      return(
        <div className="aboutTeamSocialBox">

          {this.props.info.twitter !== "" ?
          <a href={this.props.info.twitter}>
          <div className="fa fa-twitter aboutTeamSocialIcon" aria-hidden="true"></div>
          </a>
          :
          null
          }

          {this.props.info.linkedIn !== "" ?
          <a href={this.props.info.linkedIn}>
          <div className="fa fa-linkedin-square aboutTeamSocialIcon" aria-hidden="true"></div>
          </a>
          :
          null
          }

          {this.props.info.twitch !== "" ?
          <a href={this.props.info.twitch}>
          <div className="fa fa-twitch aboutTeamSocialIcon" aria-hidden="true"></div>
          </a>
          :
          null
          }

          {this.props.info.website !== "" ?
          <a href={this.props.info.website}>
          <div className="fa fa-globe aboutTeamSocialIcon" aria-hidden="true"></div>
          </a>
          :
          null
          }

        </div>
      )

    }

});




// Map Redux state to component props
function mapStateToProps(state) {
  return {
    teams: state.rosterReducer
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
  mapStateToProps,
  mapDispatchToProps
)(About)
