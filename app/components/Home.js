var React = require('react');

import HomeHeader from './HomeHeader.js'
import HomeNewsHeader from './HomeNewsHeader.js'
import HomeNewsListEntry from './HomeNewsListEntry.js'
import HomeRosterBox from './HomeRosterBox.js'

import myHistory from './myHistory.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import Footer from './Footer.js'
import Background from './Background.js'

var Scroll  = require('react-scroll');
var ScrollLink       = Scroll.Link;
var ScrollElement    = Scroll.Element;
var ScrollEvents     = Scroll.Events;
var ScrollAnimate    = Scroll.animateScroll;
var ScrollSpy        = Scroll.scrollSpy;
var Scroller         = Scroll.scroller;


var homeBannerPic = require('../imgs/Home/MainPage.png');



const Home = React.createClass({

  scrollTo: function() {
    console.log("should be scrolling");
    Scroller.scrollTo('myScrollToElement', {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                            offset: -190,
                          })
  },


  render: function(){



    console.log(this.props.children.passState);

    var newsList =  this.props.children.passState.news.slice(1).map( (a,k) =>{
      return(
        <HomeNewsListEntry title={a.title} date={a.date}  banner={a.banner} key={k} id={a.id} > </HomeNewsListEntry>
      )
    });


    return(
      <div className="contentPage">
        <Background />

        <div className="homeBanner">

          <div className="homeBannerPic img-responsive">
            <img src={homeBannerPic} />
          </div>

          <div className="homeBannerDown">
            <i onClick={this.scrollTo} className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>

        </div>


        <div
          className="col-md-offset-1 col-md-10 col-xs-12 noPadding"
          style={{
            marginTop: 100,
          }}
        >

          <div
            className="col-md-9 col-xs-12 noPadding">
            <div >
            <ScrollElement name="myScrollToElement"></ScrollElement>
            <HomeNewsHeader news={this.props.children.passState.news}></HomeNewsHeader>


            </div>
          </div>

          <div
            className="col-md-3 col-xs-12 noPadding">
            <div
              className="homeNewsList"
              style={{
                height:450,
              }}>


                {newsList}


            </div>
          </div>


        </div>

        <div className="col-xs-12 hidden-xs"
            style={{
              height:110
            }}>
        </div>



        <div
          id="homeRoster"
          className="col-md-offset-1 col-md-10 col-xs-12 homeRoster noPadding"
          style={{
            //backgroundColor: '#555555',
            marginTop: 30,
          }}
        >
          <div
            className="col-xs-12 noPadding"
            style={{
              //backgroundColor: '#880',
            }}
          >
            <HomeHeader>Rosters</HomeHeader>

            <HomeRosterBox></HomeRosterBox>

          </div>
        </div>


        <div className="col-xs-12 hidden-xs"
            style={{
              height:60
            }}>
        </div>


        <div
          className="col-md-offset-1 col-md-5 col-sm-6 col-xs-offset-0 col-xs-12 noPadding homePartners"
          style={{
            //backgroundColor: '#555555',
            marginTop: 40,
          }}
        >
          <HomeHeader>Partners</HomeHeader>

          <div
            className="col-xs-12 noPadding"
            style={{
              //backgroundColor: '#880',
            }}
          >
            <div style={{
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
          className="col-md-5 col-sm-6 col-xs-12  homeNewsLetter"
          style={{
            //backgroundColor: '#555555',
            marginTop: 40,
          }}
        >
          <HomeHeader>NewsLetter</HomeHeader>

          <div
            className="col-xs-12"
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

        <div className="col-xs-12 hidden-xs beforeFooter"></div>
        <Footer />

      </div> //end of Home

    );
  },
});


module.exports = Home;
