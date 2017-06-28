var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Background from './Background.js'
import Footer from './Footer.js'

const Partners = React.createClass({



  /*
  <PartnerBox />
  <PartnerBox />
  <PartnerBox />
  <PartnerBox />
  */

  render: function(){

    return(
      <div className="col-sm-12 contentPage">
      <Background />

      <div style={{
        marginTop:100,
      }}
      >
      </div>

        <div className="col-md-offset-1 col-md-10 col-xs-12 noPadding">
          <div className="col-xs-12 partnerBox">
            <PartnerBox />
          </div>
        </div>


        <div className="col-xs-12 hidden-xs beforeFooter"></div>
        <Footer />
      </div>
    )
  },
});

const PartnerBox = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 col-md-4 partnerPanel"
        style={{
          padding:10,
        }}
      >
        <div className="partnerBoxShadow">
          <PartnerPic />
          <PartnerBio />
          <PartnerLinks />
        </div>
      </div>
    )

  },

});

const PartnerPic = React.createClass({

  render: function(){

    var partnerLogo = require('../imgs/mcc.png')


    return(
      <div className="col-xs-12 partnerPic"
        style={{
          height:200,
          padding: "10px",
        }}
      >
       <img src={partnerLogo} height="200" className="img-responsive" />
      </div>
    )

  },

});

const PartnerBio = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 partnerBio">
       Mute City Customs, LLC is a leading creator of customized controllers and consoles for the Smash scene, featuring high quality paint jobs, aesthetic mods, resin cast buttons, and world-class controller mods. MCC has painted consoles for major tournaments such as Shine 2016, and The Big House 6, and Royal Flush, and also provides further aesthetic mods such as custom buttons and the Shinewave LED mod. MCC's controller modding services are among the best in the world, and are performed on-site at most major tournaments.
      </div>
    )

  },

});

const PartnerLinks = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 partnerLinks"
        style={{
          height:80,
          fontSize:36,
        }}
      >

        <a href="https://twitter.com/mutecitycustoms">
         <div className="fa fa-twitter partnerLinkIcon" aria-hidden="true">
         </div>
        </a>

        <a href="https://www.facebook.com/mutecitycustoms/">
          <div className="fa fa-facebook-square partnerLinkIcon" aria-hidden="true"
            style={{
              marginLeft:32,
            }}
           >
           </div>
       </a>

         <a href="http://mutecitycustoms.com/">
           <div className="fa fa-globe partnerLinkIcon" aria-hidden="true"
             style={{
               marginLeft:30,
             }}
           >
           </div>
        </a>
      </div>
    )

  },

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
  mapStateToProps
)(Partners)
