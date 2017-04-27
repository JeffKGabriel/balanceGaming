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
          "article" : [
            "On this Wednesday we’re extremely proud to announce the culmination of almost a year of blood and sweat in the launch of our new eSports family." ,
            "We are Balance Gaming",
            "",
            "While our name is new to the competitive arena, our staff combines over four decades of eSports and marketing experience with a financial staff with over twenty years of private equity and corporate finance experience, amounting to an absolutely unwavering foundation for the players and teams under our wing.",
            "We will be making a ton of announcements in the coming days but for now I will let the work we’ve all put in do the talking. Check us out on our Facebook page and definitely watch out for what’s coming later this week on Twitter. If you’re into Overwatch and/or Super Smash Bros: Melee you will not be disappointed.",
            "https://www.facebook.com/BalanceGaming/"
          ],
          "name" : "Howdy" ,
          "date" : "April 26, 2018" ,
          "title": "Intro",
          "id": 1,
          "boxPic" : "Intro_thumbnail.jpg",
          "banner" : "Intro_widebanner.jpg",
        },
      ],


      rosters:[

        {
          "game": "Overwatch",
          "pic": "About/AboutMadrid.jpg",
          "bio": "Daniel has been playing competitively since he could hold a controller, and after winning his first LAN for Halo 2 as a kid he knew he wanted to pursue a career in eSports. He then competed in Wrestling throughout high school, building and honing the competitive skills he now applies in Overwatch. In the Support role Daniel not only heals and saves his teammates but makes mid-fight plays to sway the teamfight in our favor.",
          "country": "USA",
          "name": "Viral",
          "fullName" : "Daniel \"Viral\" Madrid",
          "role": "Flex Support",
          "age": 20,
          "twitch" : "https://www.twitch.tv/viralow",
          "twitter" : "https://twitter.com/Viral_OW",
          "id": 1,
        },
        {
          "game": "Overwatch",
          "pic": "About/moon2Chopped.png",
          "bio": "Starting at a young age, Ryou excelled at any game he could get his hands on and carried that into his adult life. Launching the start of his eSports career by competing in Counter-Strike: Global Offensive. Creating his own local team and competing at even higher levels within the Washington DC area. With the release of Overwatch Ryou made the climb up the ranks to Top 500 and made the choice to leave CS:GO behind and play Overwatch full time. With the rest of his team behind him, Ryou plays the critical role of Flex DPS. Team wiping with a Genji Blade or getting crucial picks as Roadhog.",
          "country": "USA",
          "name": "MoonChopper",
          "fullName" : "Ryou \"MoonChopper\" Nishiyama",
          "role": "Flex DPS",
          "age": 20,
          "twitch" : "https://www.twitch.tv/moonchop",
          "twitter" : "https://twitter.com/RealMoonChopper",
          "id": 2,
        },
        {
          "game": "Overwatch",
          "pic": "About/AboutGBunny.jpg",
          "bio": "At a very young age Chris only had two things in mind which was football and being the best at video games. Football was the center of his life until high school where he decided to focus on eSports. Starting with League of Legends he competed and earned his way to his first LAN event. Chris grew apart from LoL and started playing Overwatch where he found his passion playing the role of Main DPS. With his raw mechanical skill he’s able to out frag the competition and win teamfights.",
          "country": "USA",
          "name": "Gbunny",
          "fullName" : "Christopher \"Gbunny\" Trimarchi",
          "role": "DPS",
          "age": 20,
          "twitch" : "https://www.twitch.tv/gbunny1",
          "twitter" : "https://twitter.com/Gbunny_OW",
          "id": 3,
        },
        {
          "game": "Overwatch",
          "pic": "About/AboutNoobicabra.jpg",
          "bio": "Avery has been gaming since he was very young.  He is always striving for excellence by finding his niche and taking it to its full potential.  One of his many strengths is understanding the inner-workings of games at both the micro and macro levels making him ideal for the Shotcaller position. He has been captivated by Overwatch since its launch; and along with his team, he aims to go all the way to the top and never look back. As the Shotcaller of the team Avery provides the gameplan and direction that gives his team the ability to truly shine in competition.",
          "country": "USA",
          "name": "Noobicabra",
          "fullName" : "Avery \"Noobicabra\" Lien",
          "role": "Support",
          "age": 20,
          "twitch" : "https://www.twitch.tv/noobicabra",
          "twitter" : "https://twitter.com/Noobicabra",
          "id": 4,
        },
        {
          "game": "Overwatch",
          "pic": "About/AboutRay.jpg",
          "bio": "Brandon comes from a long and rich gaming history that includes Heroes of Newerth, League of Legends, Battlefield, and CS:GO, he feels that Overwatch is the culmination of everything he has learned thus far in eSports. Playing the Main Tank position Brandon is the anchor for his team. Calling the engagements and protecting his teammates through thick and thin.",
          "country": "USA",
          "name": "RayReign",
          "fullName" : "Brandon \"RayReign\" Bernatz",
          "role": "Tank",
          "age": 22,
          "twitch" : "https://www.twitch.tv/rayreign",
          "twitter" : "https://twitter.com/RayReign_OW",
          "id": 5,
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
          "pic" : "About/AboutGraham3.jpg",
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
          "name" : "Mikhail “Goo” Ivanushko",
          "title" : "Graphics Artist",
          "twitter" : "https://twitter.com/GooVisuals",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Graphics Generalist with a passion for competitive gaming and speedruns. Works in a wide range of areas, from 2D Motion Graphics to 3D Character Design and VFX. Currently pursuing a degree in applied neural networks.",
          "twitch" : "",
          "pic" : "AboutGoo.jpg",
          "website" : "https://www.youtube.com/c/goovisuals",
        },
        {
          "name" : "William “WGB” Back",
          "title" : "Lead Graphics Artist",
          "twitter" : "https://twitter.com/WILLGBACK",
          "linkedIn" : "",
          "resume" : "",
          "bio": "William has been designing for about seven years; starting off as a freelance designer, but making his way into his longtime passion as an eSports designer. He plans to bring all of this experience to Balance in order to provide the best quality design work he can.",
          "twitch" : "",
          "pic" : "AboutWGJ.png",
          "website" : "https://www.behance.net/williamback",
        },

        {
          "name" : "Jeffrey Gabriel",
          "title" : "Web Designer and Developer",
          "twitter" : "https://twitter.com/JeffKGabriel",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Competitive gaming fan and javascript junkie. Enjoys minimal web design. Currently interested in mobile development and social marketing.",
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
