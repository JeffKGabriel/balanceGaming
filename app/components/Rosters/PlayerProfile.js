var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Background from '../Background.js'

const PlayerProfile = React.createClass({

  render: function(){

    //console.log(this.props.teams);

    const rightPlayer = this.props.teams.filter(m=> m.id==this.props.location.query.id );
    const player = rightPlayer.map((a,k)=> {
      //console.log(a.bio);
      return(
        <Player
          name={a.name}
          bio={a.bio}
          age={a.age}
          key={k}
        />
      )
    });

    return(
      <div className="col-sm-12">
        <Background />
        {player}
      </div>
    )

  },

});


const Player = (props) =>(
  <div>
    {props.name}
    {props.age}
    {props.bio}
  </div>
)







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
