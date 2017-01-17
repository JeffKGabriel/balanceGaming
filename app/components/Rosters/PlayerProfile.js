var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Background from '../Background.js'
import Footer from '../Footer.js'


const PlayerProfile = React.createClass({

  render: function(){

    //console.log(this.props.teams);

    const rightPlayer = this.props.teams.filter(m=> m.id==this.props.location.query.id );
    const player = rightPlayer.map((a,k)=> {
      console.log(a);
      return(
        <Player
          name={a.name}
          country={a.country}
          bio={a.bio}
          age={a.age}
          pic={a.pic}
          key={k}
        />
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
        <div className="col-sm-offset-2 col-sm-8">
          {player}
        </div>

        <div className="col-sm-12 beforeFooter"
          style={{
            marginBottom:100,
          }}
        ></div>
        <Footer />
      </div>
    )

  },

});


const Player = (props) =>(
  <div>
    <PlayerPic pic={props.pic} />
    <PlayerInfo name={props.name} age={props.age} country={props.country} bio={props.bio}  />
  </div>
)

const PlayerPic = (props) =>{
  console.log(props.pic);
  let reqPic = require('../../imgs/'+props.pic);

  return(
    <div className="col-sm-4 profilePic">
      <img className="img-responsive profileImg" src={reqPic} />
    </div>
  )
}

const PlayerInfo = (props) => {
  return(
    <div className="col-sm-8">
      <div className="col-sm-12 profileTitle">
        {props.name}
      </div>
      <div className="col-sm-12 profileInfo">
        {props.age} | {props.country}
      </div>
      <div className=" col-sm-offset-1 col-sm-10 profileBio">
        {props.bio}
      </div>
      <div className=" col-sm-offset-1 col-sm-10 profileBio"
        style={{
          marginTop:24,
        }}
      >
        Twitter: qweqweqweqweqwe
      </div>
      <div className=" col-sm-offset-1 col-sm-10 profileBio">
        Twitch: qweqweqweqweqwe
      </div>
    </div>
  )
}









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
