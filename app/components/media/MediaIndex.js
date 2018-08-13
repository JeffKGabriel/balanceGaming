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

import img1 from '../../imgs/BMR2/Resized_watermark_1.jpg'
import img2 from '../../imgs/BMR2/Resized_watermark_2.jpg'
import img3 from '../../imgs/BMR2/Resized_watermark_3.jpg'
import img4 from '../../imgs/BMR2/Resized_watermark_4.jpg'
import img5 from '../../imgs/BMR2/Resized_watermark_5.jpg'
import img6 from '../../imgs/BMR2/Resized_watermark_7.jpg'
import img7 from '../../imgs/BMR2/Resized_watermark_8.jpg'
import img8 from '../../imgs/BMR2/Resized_watermark_10.jpg'
import img9 from '../../imgs/BMR2/Resized_watermark_11.jpg'
import img10 from '../../imgs/BMR2/Resized_watermark_12.jpg'
import img11 from '../../imgs/BMR2/Resized_watermark_13.jpg'
import img12 from '../../imgs/BMR2/Resized_watermark_15.jpg'
import img13 from '../../imgs/BMR2/Resized_watermark_16.jpg'
import img14 from '../../imgs/BMR2/Resized_watermark_17.jpg'
import img15 from '../../imgs/BMR2/Resized_watermark_18.jpg'
import img16 from '../../imgs/BMR2/Resized_watermark_19.jpg'
import img17 from '../../imgs/BMR2/Resized_watermark_21.jpg'
import img18 from '../../imgs/BMR2/Resized_watermark_22.jpg'
import img19 from '../../imgs/BMR2/Resized_watermark_23.jpg'
import img20 from '../../imgs/BMR2/Resized_watermark_24.jpg'
import img21 from '../../imgs/BMR2/Resized_watermark_25.jpg'


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




    var bmr2 =[]
    bmr2[0] = img1
    bmr2[1] = img2
    bmr2[2] = img3
    bmr2[3] = img4
    bmr2[4] = img5
    bmr2[5] = img6
    bmr2[6] = img7
    bmr2[7] = img8
    bmr2[8] = img9
    bmr2[9] = img10
    bmr2[10] = img11
    bmr2[11] = img12
    bmr2[12] = img13
    bmr2[13] = img14
    bmr2[14] = img15
    bmr2[15] = img16
    bmr2[17] = img17
    bmr2[18] = img18
    bmr2[19] = img19
    bmr2[20] = img20
    bmr2[21] = img21






    const PHOTO_SET = [

      {
        src: bmr2[0],
        width: 2490,
        height: 1728,
        aspectRatio: 1.4409,
        lightboxImage:{
        src: bmr2[0],
        }
      },
      {
        src: bmr2[1],
        width: 1728,
        height: 2592,
        aspectRatio: 0.666,
        lightboxImage:{
        src: bmr2[1],
        }
      },
      {
        src: bmr2[2],
        width: 1898,
        height: 1728,
        aspectRatio: 1.0983,
        lightboxImage:{
        src: bmr2[2],
        }
      },
      {
        src: bmr2[3],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[3],
        }
      },
      {
        src: bmr2[4],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[4],
        }
      },
      {
        src: bmr2[5],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[5],
        }
      },
      {
        src: bmr2[6],
        width: 2209,
        height: 1418,
        aspectRatio: 1.557,
        lightboxImage:{
        src: bmr2[6],
        }
      },
      {
        src: bmr2[7],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[7],
        }
      },
      {
        src: bmr2[8],
        width: 2592,
        height: 1677,
        aspectRatio: 1.545,
        lightboxImage:{
        src: bmr2[8],
        }
      },
      {
        src: bmr2[9],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[9],
        }
      },
      {
        src: bmr2[10],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[10],
        }
      },
      {
        src: bmr2[11],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[11],
        }
      },
      {
        src: bmr2[12],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[12],
        }
      },
      {
        src: bmr2[13],
        width: 2439,
        height: 1728,
        aspectRatio: 1.4114,
        lightboxImage:{
        src: bmr2[13],
        }
      },
      {
        src: bmr2[14],
        width: 2426,
        height: 1728,
        aspectRatio: 1.4039,
        lightboxImage:{
        src: bmr2[14],
        }
      },
      {
        src: bmr2[15],
        width: 2099,
        height: 1286,
        aspectRatio: 1.6321,
        lightboxImage:{
        src: bmr2[15],
        }
      },
      {
        src: bmr2[17],
        width: 2337,
        height: 1728,
        aspectRatio: 1.3524,
        lightboxImage:{
        src: bmr2[17],
        }
      },
      {
        src: bmr2[18],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[18],
        }
      },
      {
        src: bmr2[19],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[19],
        }
      },
      {
        src: bmr2[20],
        width: 2592,
        height: 1728,
        aspectRatio: 1.5,
        lightboxImage:{
        src: bmr2[20],
        }
      },
      {
        src: bmr2[21],
        width: 2162,
        height: 1554,
        aspectRatio: 1.3912,
        lightboxImage:{
        src: bmr2[21],
        }
      },

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
                    videoId="IbkPKEVrPK0"
                    opts={vidOpts}
                    onReady={this._onReady}
                  />
                </div>
              </div>

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
