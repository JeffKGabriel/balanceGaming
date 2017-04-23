var React = require('react');

import Header from './Header.js'
import Footer from './Footer.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/index.css');

import myHistory from './myHistory.js'


const Main = React.createClass({

  getInitialState() {
    return {

      news:[
        {
          "article" : "Bacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey stBacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey st" ,
          "name" : "News Fame" ,
          "date" : "Jan 8, 2018" ,
          "title": "News Titleee",
          "id": 1,
          "boxPic" : "rtzHeadRed.png",
          "banner" : "bannerRed.png",
        },
        {
          "article": "Bacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey stBacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey st",
          "name": "News Fame",
          "date": "Jan 8, 2018",
          "title": "News Titleee",
          "id": 2,
          "boxPic" : "rtzHeadRed.png",
          "banner" : "BannerGreen.png",
        },
        {
          "article": "Bacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey stBacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey st",
          "name": "News Fame",
          "date": "Jan 8, 2018",
          "title": "News Titleee",
          "id": 3,
          "boxPic" : "rtzHeadRed.png",
          "banner" : "BannerYellow.png",

        },
        {
          "article": "Bacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey stBacon ipsum dolor amet turducken kielbasa sausage burgdoggen, cupim leberkas beef spare ribs pancetta boudin short loin. Pork chop ribeye filet mignon tri-tip ham hock t-bone jowl shank tongue landjaeger boudin. Rump boudin kevin pork belly jowl flank. Ball tip andouille ribeye shankle bresaola. Frankfurter landjaeger t-bone boudin, chicken pork belly short ribs turkey doner. Fatback filet mignon shank meatball, venison cow picanha ham hock andouille kielbasa swine cupim strip steak. Beef ribs jowl turkey st",
          "name": "News Fame",
          "date": "Jan 8, 2018",
          "title": "News Titleee",
          "id": 4,
          "boxPic" : "rtzHeadRed.png",
          "banner" : "lightBanner1.png",
        }
      ],
      rosters:[
        {
          "game": "Melee",
          "pic": "isaiRoster.png",
          "bio": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "country": "USA",
          "name": "Isai",
          "age": 17,
          "id": 4,
        },
        {
          "game": "Melee",
          "pic": "arteezyRoster.png",
          "bio": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "country": "Canada",
          "name": "Arteezy",
          "age": 24,
          "id": 2,
        },
      ],
      partners:[

      ],
      aboutBios:[
        {
          "name" : "Graham Peters",
          "title" : "Co-Owner/Managing Partner",
          "twitter" : "https://twitter.com/GrahamJPeters",
          "linkedIn" : "https://www.linkedin.com/in/graham-peters-43a26361",
          "resume" : "https://www.dropbox.com/s/6a3jennm3rfqs7g/Graham%20Peters%20Resume.doc?dl=0",
          "bio" : "Entrepreneur with over 10 years of experience in the technology, e-commerce, e-sports and gaming industries. Highly motivated to grow within the e-sports market and invest further in its growth as well. Past entrepreneurship ventures include real market trading, tournament hosting, talent management, and content creation.",
          "twitch" : "https://www.twitch.tv/trvirtua",
          "pic" : "About/AboutGraham2.jpg",
          "website" : "",
        },
        {
          "name" : "Dalton Peters",
          "title" : "Co-Owner/Managing Partner",
          "twitter" : "",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Over 7 years of corporate finance & real estate experience working with Investment and Operations firms, responsible for cash flow forecasting; financial, credit and covenant analysis; investor, bank and financial statement reporting. Passionate Super Smash Bros. Wii U and Melee player. Former competitive World of Warcraft PvP and Team Fortress 2 player including heavy involvement in requisite communities.",
          "twitch" : "",
          "pic" : "About/AboutDalton.png",
          "website" : "",
        },
        {
          "name" : "Jordan Richards",
          "title" : "Multimedia Manager",
          "twitter" : "https://twitter.com/OverwatchGotz",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Entrepreneur with 4 years of experience in e-sports team management, content creator management, artist management, and more. Co-founder of former eSport League OCG Gaming. Former Chief Media Officer for Exertus eSports.",
          "twitch" : "",
          "pic" : "AboutJordan.jpg",
          "website" : "",
        },
        {
          "name" : "Harrisson Yeoland",
          "title" : "Social Media & Engagement Manager",
          "twitter" : "https://twitter.com/Sizurex",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Passionate Gamer with over 12 years experience in Professional Online Gaming, e-sports team management, Twitch.tv Broadcasting, Social Media Platforms, and content creation.",
          "twitch" : "https://www.twitch.tv/sizurex",
          "pic" : "AboutHarrisson.jpg",
          "website" : "",
        },
        {
          "name" : "Matthew Eriks",
          "title" : "Lead Graphics Artist",
          "twitter" : "https://twitter.com/worstjesterNA",
          "linkedIn" : "",
          "resume" : "",
          "bio": "Avid gamer, and esports fan. Motion graphic artist, specializing in Photoshop and After Effects with 8 years of work experience. Well versed in everything from logo design to rotoscope animation.",
          "twitch" : "",
          "pic" : "AboutMatthew.jpg",
          "website" : "http://mattjeriks.com/",
        },

        {
          "name" : "Jeffrey Gabriel",
          "title" : "Web Designer and Developer",
          "twitter" : "https://twitter.com/JeffKGabriel",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Competative gaming fan and javascript junkie. Enjoys minimal web design. Currently interested in mobile development and social marketing.",
          "twitch" : "",
          "pic" : "About/AboutJeff2.png",
          "website" : "http://jgab.me/",
        },

      ]
    }
  },

  //mixins: [myHistory],

  render: function(){

    return(
      <div>
        <Header activeTab={this.props.location.pathname} />

          <ReactCSSTransitionGroup
            transitionName = "myAppear"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            { React.cloneElement(this.props.children, {key:this.props.location.pathname} , {passState :this.state} ) }
          </ReactCSSTransitionGroup>
      </div>
    )
  },
});

export default Main
