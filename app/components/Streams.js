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


const Streams = React.createClass({


  render: function(){

    const streamThumbs = this.props.children.passState.rosters.map( (a,k) => {

      return(
        <StreamThumbs info={a} key={k} />
      )

    });


      var config = {
        headers: {'Accept': 'application/vnd.twitchtv.v3+json'}
      }

      let logos = []

      axios.get('https://api.twitch.tv/kraken/channels/summit1g', config)
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          logos.push(response.data.logo)
          console.log("logos",logos);
        });



      /*
      request(options, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
      */



    return(
      <div className="col-sm-12 contentPage">
        <Background />
        <div style={{
          marginTop:160,
        }}
        >
        </div>

        <div className="col-sm-offset-1 col-sm-10">


          {streamThumbs}
          <StreamBox />


          <HomeHeader>-</HomeHeader>



        </div>




        <div className="col-sm-12 hidden-xs beforeFooter">
        </div>
        <Footer />
      </div>
    )
  },
});






const StreamThumbs = React.createClass({

  render: function(){


    return(
      <div className="col-sm-12">

        <div style={{display: 'flex', flexDirection: 'row' }} >

          <div>
            {this.props.info.twitch}
          </div>

        </div>



      </div>
    )
  }

});



const StreamBox = (props) =>{


    return(
      <Measure>
        {dimensions =>

          <div className="col-sm-12 noPadding">

            <iframe
             src="http://player.twitch.tv/?channel=savjz"
             height={dimensions.width * (9/16)}
             width={dimensions.width}
             frameBorder="0"
             scrolling="no"
             allowFullScreen="true">
           </iframe>

          </div>
        }
      </Measure>
    )
}







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
)(Streams)
