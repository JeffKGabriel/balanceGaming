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




const AllTeams = React.createClass({





  render: function(){

    console.log(window.innerWidth);


    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div className="col-sm-12 col-sm-offset-0 rosterGalleryBox">
          <div className="rosterGallery">
            <ul>
              {window.innerWidth >= 1200 ?
                <li className="rosterGalleryPic" style={{opacity:0.5}}><img src={rosterSoonDark} /> </li>
                : null
              }
              <li className="rosterGalleryPic"
                style={{
                  opacity:0.5
                }}
              >
                  <img src={rosterSoonLight} />
              </li>
              <li id="meleeRosterPic" className="rosterGalleryPic">
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Melee" } }} >
                  <img src={rosterMelee} />
                </Link>
              </li>
              <li className="rosterGalleryPic"
                style={{
                  opacity:0.5
                }}
              >
                  <img src={rosterSoonLight} />
              </li>
              {window.innerWidth >= 1200 ?
                <li className="rosterGalleryPic" style={{opacity:0.5}}><img src={rosterSoonDark} /> </li>
                : null
              }
            </ul>
          </div>
        </div>


        <div className="col-sm-12 beforeFooter"></div>
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
