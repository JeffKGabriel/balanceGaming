var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import HomeHeader from '../HomeHeader.js'
import HomeRosterPanel from '../HomeRosterPanel.js'

import Footer from '../Footer.js'
import Background from '../Background.js'


const Team = React.createClass({

  render: function(){

    let gameName = this.props.location.query.id;

    let rosters = [gameName].map( (game,k)=>{
                let gameTeam = this.props.children.passState.rosters.filter(m=>m.game == game);
                return <TeamPanels players={gameTeam} gameName={game} key={k} />
              });



    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:160,
        }}
        >
        </div>

        {rosters}

        <div className="col-sm-12 beforeFooter">
        </div>
        <Footer />
      </div>
      )

    },

  });


  const TeamPanels = React.createClass({
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
          <HomeHeader logo="smashLogo2.jpg" >{this.props.gameName}</HomeHeader>
          <div className="col-sm-12 rosterPanelBox">
            {players}
          </div>

        </div>
      )
    }
  });


/*

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
  )(Team)


  */

  export default Team
