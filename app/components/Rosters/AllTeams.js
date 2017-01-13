var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../HomeHeader.js'
import HomeRosterPanel from '../HomeRosterPanel.js'

import myHistory from '../myHistory.js'




const AllTeams = React.createClass({

  mixins: [myHistory],


  render: function(){

    let gameList = [...new Set( this.props.teams.map(item => item.game) )];

    let rosters = gameList.map( (game,k)=>{
                let gameTeam = this.props.teams.filter(m=>m.game == game);
                return <Team players={gameTeam} gameName={game} key={k} />
              });

    return(
      <div className="col-sm-12">
        <div
          className="col-sm-12 homeBackground"
          style={{
            height:1300,
            //background : 'url(' + 'https://images.unsplash.com/photo-1474518665815-99456f56c531?dpr=2&auto=format&fit=crop&w=1500&h=844' + ') no-repeat center center',
            background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#FFF",
            opacity:0.1,
            position: 'absolute',
          }}
        >
        </div>
        <div className="col-sm-12 homeBackgroundAfter"> </div>
        <div className="col-sm-12"
        style={{
          marginTop:160,
        }}
        ></div>




        {rosters}

        <div className="col-sm-12 beforeFooter"></div>
      </div>
    )

  },

});

const Team = React.createClass({
  render:function(){
    //        {this.props.name} - {this.props.age} - {this.props.country} - {this.props.bio}

    const players = this.props.players.map((a,k) =>{

        let memberInfo = {
          id:a.id,
          age:a.age,
          name:a.name,
          country:a.country,
          pic: require('../../imgs/'+a.pic)
        }
      return(
        <HomeRosterPanel info = {memberInfo} key={k}/>
      );
    });

    return(
      <div className="col-sm-12"
        style={{
          marginBottom:80,
        }}
      >
        <HomeHeader>{this.props.gameName}</HomeHeader>
        <div className="col-sm-12 rosterPanelBox">
          {players}
        </div>

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
  mapStateToProps
)(AllTeams)
