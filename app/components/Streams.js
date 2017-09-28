var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './Footer.js'
import Background from './Background.js'

import HomeHeader from './HomeHeader.js'

import Measure from 'react-measure';

var axios = require('axios')


async function getStreams(){

      var config = {
        headers: {'Accept': 'application/vnd.twitchtv.v3+json',
                  'Client-ID': 'gq3eamtaznxxixtj3w151doy60oxl51'
                 }
      }

       const response = await axios.get('https://api.twitch.tv/kraken/channels/rayreign', config)
       const data = response.data;
       console.log("single channel",data);
}

async function getLiveStreams(){

      var logos = []
      var names = []
      var liveStreamInfos = {
        logos: logos,
        names: names
      }

      var configLive = {
        headers: {'Accept': 'application/vnd.twitchtv.v5+json',
                  'Client-ID': 'gq3eamtaznxxixtj3w151doy60oxl51',
                 }
      }

      const response = await axios.get('https://api.twitch.tv/kraken/streams/?channel=62044794,41629741,76603065,41002166,48912398,69532631,31754159,40923194,8444510,22212857,54719698', configLive)

      console.log("live channels",response.data);

      if(response.data.streams.length > 0){

        for(var i=0;i<response.data.streams.length;i++){

          logos.push(response.data.streams[i].channel.logo)
          names.push(response.data.streams[i].channel.name)

        }
      }

      return liveStreamInfos

}







const Streams = React.createClass({

  getInitialState() {
    return {
      logos:null,
      names:null,
      active:"undefined"
    };
  },


  componentWillMount: async function(){

    /*
          getStreams().then( x=> {
            console.log(x);
          })
     */


          getLiveStreams().then( x=> {
            //console.log(x);
            console.log("x.names",x.names);
            this.setState({
                           names:x.names,
                           logos:x.logos,
                           active:x.names[0]
                          })
          })

  },


  render: function(){

    console.log("render");
    console.log("state", this.state);

    var that = this


    let streamThumbs = null

    let changeStream = (name) =>{
        this.setState({
            active: name
        });
    }

    if(this.state.names !== null){

      streamThumbs = Object.keys(this.state.names).map( (a,k) => {

        return(
          <StreamThumbs changeStream={changeStream} name={this.state["names"][k]} logo={this.state["logos"][k]} active={this.state.active} key={k} />
        )

      });

    }


  //  let streamBox = () =>{
  //    console.log("make streamBox active",this.state.active);
  //    return(
  //      <StreamBox active={this.state.active} />
  //    )
  //  }



    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:120,
        }}
        >
        </div>

        <div className="col-sm-offset-1 col-sm-10">

          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' , flexWrap:'wrap', marginBottom:"34px" }} >
            {streamThumbs}
          </div>


          <StreamBox active={this.state.active} />

        </div>



        <StreamInfo teams={this.props.children.passState.rosters.concat(this.props.children.passState.staffBios)} currentStreamer={this.state.active} />




        <div className="col-sm-12 hidden-xs beforeFooter">
        </div>
        <Footer />
      </div>
    )
  },
});

const Player = (props) =>(
  <div  style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems:'center',
        }}
    >
    <PlayerPic pic={props.pic} />
    <PlayerInfo pic={props.pic} name={props.name} age={props.age} country={props.country} bio={props.bio} fullName={props.fullName}  />
  </div>
)
const PlayerPic = (props) =>{

  let reqPic = require('../imgs/'+props.pic);

  return(
    <div className="col-xs-12 col-sm-4 noPadding"
      style={{
        display: 'flex',
        justifyContent: 'center',
        }}
      >
      <div className="profilePic col-xs-12">
        <img className="img-responsive profileImg" src={reqPic} />
      </div>


    </div>
  )
}
const PlayerInfo = (props) => {
  return(
    <div className=" col-xs-12 col-sm-8 noPadding"
      style={{
        float: 'right',
        marginTop: '10px'
      }}
    >
      <div className="profileTitleBackground col-sm-12">

        <div className="col-sm-11">

          <div className="col-sm-12 profileTitle">
            {props.fullName}
          </div>
          <div className="col-sm-12 profileInfo">
            {props.age} | {props.country}
          </div>
        </div>

      </div>

      <div className=" col-sm-offset-1 col-sm-10 profileBio">
        {props.bio}
      </div>

    </div>
  )
}


const StreamInfo = React.createClass({


  render: function(){

    console.log(this.props.teams);

    var thisStreamer = this.props.teams.filter( (a,k)=>{
      return a.twitchName == this.props.currentStreamer
    })


    const player = thisStreamer.map((a,k)=> {
      return(
        <Player
          name={a.name}
          fullName={a.fullName}
          country={a.country}
          bio={a.bio}
          age={a.age}
          pic={a.pic}
          twitter={a.twitter}
          twitch={a.twitch}
          key={k}
        />
      )
    })

    return(

      <div className=" col-xs-12 col-md-offset-2 col-md-8">

        {player}

      </div>

    )


  }


})






const StreamThumbs = React.createClass({


  render: function(){

    return(
      <div className="col-sm-2">

          <div
            style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}
            onClick={()=> this.props.changeStream(this.props.name)}
            >
            <img className={this.props.active == this.props.name ? "streamThumbsActive" : "streamThumbs" } src={this.props.logo} height="100" width="100" />
          </div>

      </div>
    )
  }

});




const StreamBox = React.createClass({

  render: function(){

    console.log("streamBox active props",this.props.active);
    let liveSrc = "http://player.twitch.tv/?channel="+this.props.active


      return(
        <div>
          {this.props.active == null
            ?
              <div className='aboutBio'
                style={{
                  marginTop:'80px',
                }}
                >
                No one is streaming at this time
              </div>
            :

            <Measure>
              {dimensions =>

                <div className="col-sm-12 noPadding">

                  <iframe
                   src={liveSrc}
                   height={dimensions.width * (9/16)}
                   width={dimensions.width}
                   frameBorder="0"
                   scrolling="no"
                   allowFullScreen="true">
                 </iframe>

                </div>
              }
            </Measure>
          }
        </div>
      )
    }
});







// Map Redux state to component props
function mapStateToProps(state) {
  return {
    teams: state.rosterReducer  //.concat(state.otherReducer)
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
)(Streams)
