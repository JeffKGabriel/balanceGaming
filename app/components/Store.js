var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './Footer.js'
import Background from './Background.js'

import HomeHeader from './HomeHeader.js'

import store from '../scripts/store.js'


const Store = React.createClass({


  componentWillMount: function(){
    store()
  },


  render: function(){

    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:160,
        }}
        >
        </div>

        <div className="col-sm-offset-1 col-sm-10">

          <HomeHeader>Store</HomeHeader>

          <br /> <br />

          <div id='collection-component-74bf8d6ff7b'></div>

        </div>

        <div className="col-sm-12 hidden-xs beforeFooter">
        </div>
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
  mapStateToProps,
  mapDispatchToProps
)(Store)
