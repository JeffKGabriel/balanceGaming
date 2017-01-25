var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../HomeHeader.js'
import HomeRosterPanel from '../HomeRosterPanel.js'

import Footer from '../Footer.js'
import Background from '../Background.js'





const AllTeams = React.createClass({



  render: function(){

    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div className="col-sm-10 col-sm-offset-1 rosterGalleryBox">
          <div className="rosterGallery">
            <ul>
              <li className="rosterGalleryPic">
                <Link to={{ pathname: '/Team' , state: { scrollToTop: true } , query:{id:"Smash" } }} >
                  <img src="http://lorempixel.com/300/500/city/?1" />
                </Link>
              </li>
              <li className="rosterGalleryPic">
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Overwatch" } }} >
                  <img src="http://lorempixel.com/300/500/city/?2" />
                </Link>              </li>
              <li className="rosterGalleryPic">
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Dota 2" } }} >
                  <img src="http://lorempixel.com/300/500/city/?3" />
                </Link>
              </li>
              <li className="rosterGalleryPic">
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"Starcraft 2" } }} >
                  <img src="http://lorempixel.com/300/500/city/?4" />
                </Link>
              </li>
              <li className="rosterGalleryPic">
                <Link to={{ pathname: '/Team'  , state: { scrollToTop: true } , query:{id:"CSGO" } }} >
                  <img src="http://lorempixel.com/300/500/city/?5" />
                </Link>
              </li>
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
