var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './Footer.js'
import Background from './Background.js'

const About = React.createClass({

  getInitialState: function() {
    return {
      newsList : []
    }
  },

  componentWillMount: function () {
  },

  componentDidMount: function () {
  },

  componentDidUpdate() {
  },

  render: function(){

    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <Background />
        <div style={{
          marginTop:160,
        }}
        >
        </div>
        About
        <div className="col-sm-12 beforeFooter">
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
)(About)
