var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
      <div className="col-sm-12"
        style={{
          marginTop:100,
        }}
      >
        About
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
