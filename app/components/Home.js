var React = require('react');

import HomeHeader from './HomeHeader.js'
import HomeNewsHeader from './HomeNewsHeader.js'
import HomeNewsListEntry from './HomeNewsListEntry.js'
import HomeRosterBox from './HomeRosterBox.js'

import myHistory from './myHistory.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import Footer from './Footer.js'
import Background from './Background.js'



const Home = React.createClass({



  render: function(){

    return(
      <div className="contentPage">
        <Background />

        <div className="homeBanner">

          <div className="homeBannerDown">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>

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
            marginTop: 180,
            marginBottom:80,
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
              height:400,
            }}>

              <div className="partnersBox">

                <div className="partnersHomePanel" style={{
                  height:200,
                  width:200,
                  backgroundColor: '#424',
                }}>
                  <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/512/twitch-512-black.png" height="200" width="200" />
                </div>
                <div className="partnersHomePanel" style={{
                  height:200,
                  width:200,
                  backgroundColor: '#f24',
                }}>
                  <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/512/twitch-512-black.png" height="200" width="200" />
                </div>
                <div className="partnersHomePanel" style={{
                  height:200,
                  width:200,
                  backgroundColor: '#238',
                }}>
                  <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/512/twitch-512-black.png" height="200" width="200" />
                </div>
                <div className="partnersHomePanel" style={{
                  height:200,
                  width:200,
                  backgroundColor: '#a42',
                }}>
                  <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/512/twitch-512-black.png" height="200" width="200" />
                </div>
                <div className="partnersHomePanel" style={{
                  height:200,
                  width:200,
                  backgroundColor: '#32b',
                }}>
                  <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/512/twitch-512-black.png" height="200" width="200" />
                </div>

              </div>

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
              height:400,
            }}>



            <div className="col-sm-offset-1 col-sm-10 newsLetterForm">

              <p>Stay Up to Date w/ Balance</p>

              <div className="input-group input-group-lg"
                style={{
                  marginTop:14,
                }}
              >
                <span className="input-group-addon" id="sizing-addon1">Name</span>
                <input type="text" className="form-control" placeholder="Name" aria-describedby="sizing-addon1" />
              </div>
                <div className="input-group input-group-lg"
                  style={{
                    marginTop:8,
                  }}
                >
                  <span className="input-group-addon" id="sizing-addon2">Email</span>
                  <input type="text" className="form-control" placeholder="Home@Mail.com" aria-describedby="sizing-addon2" />
              </div>
              <button type="button" className="btn btn-default btn-lg"
                style={{
                  marginTop:14,
                }}
              >
                Submit
              </button>
            </div>




            </div>

          </div>
        </div>

        <div className="col-sm-12 beforeFooter"></div>
        <Footer />

      </div> //end of Home

    );
  },
});


module.exports = Home;
