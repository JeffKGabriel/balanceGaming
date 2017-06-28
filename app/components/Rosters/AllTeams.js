var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../HomeHeader.js'
import HomeRosterPanel from '../HomeRosterPanel.js'

import Footer from '../Footer.js'
import Background from '../Background.js'


var rosterMelee = require('../../imgs/RosterGames/Games01.jpg');
var rosterOverwatch = require('../../imgs/RosterGames/Games02.jpg');
var rosterGears = require('../../imgs/RosterGames/Games03.jpg');
var rosterStreetFighter = require('../../imgs/RosterGames/Games04.jpg');
var rosterCSGO= require('../../imgs/RosterGames/Games05.jpg');
var rosterSoonDark= require('../../imgs/RosterGames/Games_Soon_Dark.jpg');
var rosterSoonLight= require('../../imgs/RosterGames/Games_Soon_Light.jpg');


var OWLight = require('../../imgs/RosterGames/OW_light.png');
var SmashSoon = require('../../imgs/RosterGames/Smash_soon.jpg');
var SmashLight = require('../../imgs/RosterGames/Smash_light.png');


var ComingSoon = require('../../imgs/RosterGames/Coming_soon.jpg');






const AllTeams = React.createClass({


/*
<Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Melee" } }} >
  <img src={rosterMelee} />
</Link>
*/




  render: function(){

    console.log(window.innerWidth);


    return(
      <div className="col-sm-12 contentPage">
        <Background />

        <div className=" hidden-xs col-sm-12 col-sm-offset-0 rosterGalleryBox">
          <div className="rosterGallery">
            <ul style={{
              display:"flex",
              flexWrap:"wrap",
            }}>

              <li className="rosterGalleryPic hidden-xs hidden-sm hidden-md" style={{opacity:0.7}}><img src={ComingSoon} /> </li>

              <li className="rosterGalleryPic hidden-xs" style={{opacity:0.7}}><img src={ComingSoon} /></li>


              <li id="rosterGamePic" className="rosterGalleryPic">
                  <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Overwatch" } }} >
                    <img src={OWLight} />
                  </Link>
              </li>

              <li id="rosterGamePic" className="rosterGalleryPic" style={{}}>
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Melee" } }} >
                  <img src={SmashLight} />
                </Link>

              </li>

              <li className="rosterGalleryPic hidden-xs hidden-sm hidden-md" style={{opacity:0.7}}><img src={ComingSoon} /> </li>

            </ul>
          </div>
        </div>


        <div className="col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl"
          style={{
            display:'flex',
            justifyContent:'space-around',
            flexWrap:'wrap',
            marginTop:120,
          }}>

          <div style={{ marginTop:20 }}>
            <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Overwatch" } }} >
              <img src={OWLight} />
            </Link>
          </div>

          <div style={{ marginTop:20 }}>
            <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Melee" } }} >
              <img src={SmashLight} />
            </Link>
          </div>

        </div>




        <div className="col-sm-12 hidden-xs beforeFooter"></div>
        <Footer />
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
)(AllTeams)
