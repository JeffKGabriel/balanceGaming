var React = require('react');

//var ReactRouter = require('react-router');
//var Link = ReactRouter.Link;

var Slider = require('react-slick');
import YouTube from 'react-youtube'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Background from '../Background.js'
import Footer from '../Footer.js'

import HomeHeader from '../HomeHeader.js'

//import Gallery from './Gallery'
import Gallery from 'react-photo-gallery';




const MediaIndex = React.createClass({

  /*
  {
    src: 'http://lorempixel.com/400/200/',
    width: 400,
    height: 200,
    aspectRatio: 2,
    lightboxImage:{
    src: 'http://lorempixel.com/400/200/',
    }
  },
  */

  render: function(){

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const vidOpts = {
      height: '450',
      width: '800',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 2,
        //modestbranding: 1,
        showinfo: 0,
        autohide: 1,
        frameborder:0,
      }
    }

    const PHOTO_SET = [

    ];

    return(
      <div className="col-sm-12 contentPage">
        <Background />

        <div className="col-sm-offset-1 col-sm-10"
          style={{
            marginTop:160,
          }}

        >

          <div className="mainMediaSlider col-sm-offset-2 col-sm-8"
            style={{
              height: 490,
              marginBottom: 60,
            }}
          >
            <Slider {...sliderSettings}>

              <div>
                <div className="sliderContent">
                  <YouTube
                    videoId="G9UnwZ2HsXg"
                    opts={vidOpts}
                    onReady={this._onReady}
                  />
                </div>
              </div>

            </Slider>
          </div>

          <div className="mediaGalleryBox col-sm-offset-1 col-sm-10 noPadding"
           style={{
             marginTop: 80,
           }}
          >
            <HomeHeader>Gallery</HomeHeader>

            <div className="col-xs-12"
            style={{
              height:60,
            }}
            >
            </div>


            <Gallery photos={PHOTO_SET} />


          </div>

        </div>


        <div className="col-sm-12 beforeFooter"></div>

        <Footer />
      </div>
    )
  },

/*
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  */

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
)(MediaIndex)
