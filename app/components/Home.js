var React = require('react');

import HomeHeader from './HomeHeader.js'
import HomeNewsHeader from './HomeNewsHeader.js'
import HomeNewsListEntry from './HomeNewsListEntry.js'
import HomeRosterBox from './HomeRosterBox.js'

import myHistory from './myHistory.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');



const Home = React.createClass({



  render: function(){

    return(
      <div className="wrapper">
        <div
          className="col-sm-12 homeBackground"
          style={{
            height:1300,
            //background : 'url(' + 'https://images.unsplash.com/photo-1474518665815-99456f56c531?dpr=2&auto=format&fit=crop&w=1500&h=844' + ') no-repeat center center',
            background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#FFF",
            opacity:0.2,
            position: 'absolute',
          }}
        >
        </div>

        <div className="col-sm-12 homeBackgroundAfter"> </div>

        <div
          className="col-sm-offset-3 col-sm-6"
          style={{
            height:200,
            zIndex: 1,
            marginTop:240,
            marginBottom: 80,
            opacity : 0.7,
          }}
        >
          <img className="img-responsive" src={require('../imgs/logoBlackBig.png')}
            style={{
              height:160,
              margin: "0 auto",
            }}
          />
        </div>

        <div
          className="col-sm-offset-1 col-sm-10"
          style={{
            marginTop: 0,
            display : 'flex',
            justifyContent : 'center',
          }}
        >
        </div>


        <div
          className="col-sm-offset-1 col-sm-10"
          style={{
            marginTop: 100,
          }}
        >

          <div
            className="col-sm-9"
            style={{
              padding: 15,
            }}
          >
            <div >

            <HomeNewsHeader></HomeNewsHeader>


            </div>
          </div>

          <div
            className="col-sm-3"
            style={{
              //backgroundColor: '#880',
              padding: 15,
            }}
          >
            <div
              className="homeNewsList"
              style={{
                height:450,
              }}>

              <HomeNewsListEntry img="bannerRed" > </HomeNewsListEntry>

              <HomeNewsListEntry img="BannerGreen" > </HomeNewsListEntry>

              <HomeNewsListEntry img="BannerYellow" > </HomeNewsListEntry>

              <HomeNewsListEntry img="greyBanner" > </HomeNewsListEntry>


            </div>
          </div>


        </div>




        <div
          id="homeRoster"
          className="col-sm-offset-1 col-sm-10 homeRoster"
          style={{
            //backgroundColor: '#555555',
            marginTop: 100,
          }}
        >
          <div
            className="col-sm-12"
            style={{
              //backgroundColor: '#880',
              padding: 15,
            }}
          >
            <HomeHeader>Rosters</HomeHeader>

            <HomeRosterBox></HomeRosterBox>

          </div>
        </div>



        <div
          className="col-sm-offset-1 col-sm-5 homePartners"
          style={{
            //backgroundColor: '#555555',
            marginTop: 100,
          }}
        >
          <HomeHeader>Partners</HomeHeader>

          <div
            className="col-sm-12"
            style={{
              //backgroundColor: '#880',
              padding: 15,
            }}
          >
            <div style={{
              backgroundColor: '#0F0',
              height:400,
            }}>
            </div>

          </div>
        </div>

        <div
          className="col-sm-5 homeNewsLetter"
          style={{
            //backgroundColor: '#555555',
            marginTop: 100,
          }}
        >
          <HomeHeader>NewsLetter</HomeHeader>

          <div
            className="col-sm-12"
            style={{
              //backgroundColor: '#880',
              padding: 15,
            }}
          >
            <div style={{
              backgroundColor: '#0F0',
              height:400,
            }}>
            </div>

          </div>
        </div>

        <div className="col-sm-12 beforeFooter"></div>


      </div> //end of Home

    );
  },
});


module.exports = Home;
