var React = require('react');

import Header from './Header.js'
import Footer from './Footer.js'
import Favicon from 'react-favicon'


var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/index.css');

import myHistory from './myHistory.js'


const Main = React.createClass({

  getInitialState() {
    return {

      news:[
        {
          "article" : [
            "Balance Gaming is proud to announce that Tommy “Ryo” Janky will be joining our team as our first Super Smash Bros. Wii U player! Balance Gaming has been very eager to expand further into Smash Bros. and claiming the Number 1. Ike player for our own is just the first step in this process. Ryo is regarded as one of the best players in Florida as well as one of the best, if not the best, Ike player in the world.",
            "Balance plans to invest deeper into the Central Florida ecosystem by creating a deep connection to the players within and promoting sustainable growth for the grass roots competitive environment. Ryo, as well as other prospects, have been in contact with the staff of Balance and are no strangers to the organization or their visions of the future for Smash Bros. Wii U.  Be sure to expect more signings of players and staff in the very near future! Also, don't forget to follow Ryo on twitter and twitch.tv!",
            "Twitter: https://twitter.com/Ryo_Guikido",
            "Twitch: https://www.twitch.tv/ryoguikido",
          ],
          "name" : "Ryo Guikido" ,
          "date" : "Sept 22, 2017" ,
          "title": "Ryo Guikido",
          "id": 2,
          "boxPic" : "News/BalanceRyoWebThumbnail.png",
          "banner" : "News/BalanceRyoBanner.png",
        },
        {
          "article" : [
            "In anticipation of a lot of upcoming announcements for the Super Smash Bros scene, we at Balance Gaming are extremely excited to announce our partnership with Mute City Customs!!" ,
            "Mute City Customs, LLC is a leading creator of customized controllers and consoles for the Smash scene, featuring both high quality paint jobs and world-class controller mods. MCC has painted consoles for major tournaments such as Super Smash Con, Shine 2016, and The Big House 6, alongside a number of controller commissions. MCC's Typo is arguably the top controller modder in the Smash scene, and has worked on controllers for dozens of SSBMRank Top 100 players.",
            "We at Balance are longtime fans of Tyler/Nfreak and having met with him over the past few months, it was clear that they were looking to take their operations and content creation to the next level. With the addition of Typo to their staff and the newly formed partnership with Balance Gaming both organizations now have the pieces in place to provide the Smash community with a new level of content and services. We are already collaborating on a number of projects that we’re extremely excited to let you guys in on in the very near future and definitely stay tuned on social media because this is only the beginning for what’s to come for us in the Smash community.",
            "You can find MCC on their twitters @MCC_NFreak and @HRCtypo, on Facebook at facebook.com/mutecitycustoms or Twitter at twitter.com/mutecitycustoms . Also if you’re attending Royal Flush this weekend, definitely check out their booth.",
            "Also if you haven’t already, check us out @esportsbalance and at https://www.facebook.com/balancegaming",
          ],
          "name" : "Mute City" ,
          "date" : "May 12, 2017" ,
          "title": "Balance X MCC",
          "id": 1,
          "boxPic" : "Thumbnail.jpg",
          "banner" : "Mute_Banner.jpg",
        },
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
          "date" : "April 26, 2017" ,
          "title": "Intro",
          "id": 0,
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
          "twitchName" : "viralow",
          "twitter" : "https://twitter.com/Viral_OW",
          "id": 1,
        },
        {
          "game": "Melee",
          "pic": "About/SyroxWebPic.png",
          "bio": "Living in Colorado at the start of his teenage years Justin found a love for Super Smash Bros. Melee. He has always strived to always “show up” in anything he puts his mind to, and with a passion to become the best, this is only the start for him! Around 2015 is when Justin started to realize who he was in the game, big advancements were always made and a strive to keep getting better. You can always expect to see exciting plays from him, his play is described as a flow, you can always see his punish and movement go hand in hand fluently.",
          "country": "USA",
          "name": "Syrox",
          "fullName" : "Justin \"Syrox\" Burroughs",
          "role": "Fox",
          "age": 18,
          "twitch" : "https://www.twitch.tv/syroxm",
          "twitchName" : "syroxm",
          "twitter" : "https://twitter.com/SyroxM",
          "id": 6,
        },

        {
          "game": "Melee",
          "pic": "About/DFoxWebPic.png",
          "bio": "Sami Muhanna aka Druggedfox, a Melee player hailing from Atlanta, GA, is known for his extremely technical punish-based playstyle on both his previous characters, Sheik and Falco. Sami has now brought that style to his fox, with whom he ranked 23rd on the 2016 SSBMRank. With 2017 leaving him looking like a top 10 contender, he is only looking to push his game even further. Druggedfox is a true student of the game and is widely known not only as a great player but also as a top tier analyst.",
          "country": "USA",
          "name": "Druggedfox",
          "fullName" : "Sami \"Druggedfox\" Muhanna",
          "role": "Fox",
          "age": 24,
          "twitch" : "https://www.twitch.tv/druggedfox",
          "twitchName" : "druggedfox",
          "twitter" : "https://twitter.com/Druggedfox",
          "id": 7,
        },

        {
          "game": "Melee",
          "pic": "About/SleepyWebPic.png",
          "bio": "John ‘Sleepyk’ Lee is a longstanding member of the Super Smash Brothers Melee community (2007). I've spent many of my years helping other people improve and I have written a comprehensive guide for improving at the game. I've placed pretty well at multiple nationals (Top 8 EVO SSBM Doubles 2016) and provide high level commentary.",
          "country": "USA",
          "name": "Sleepyk",
          "fullName" : "John \"Sleepyk\" Lee",
          "role": "Manager",
          "age": 27,
          "twitch" : "https://www.twitch.tv/sleepyk",
          "twitchName" : "sleepyk",
          "twitter" : "https://twitter.com/sleepike",
          "id": 8,
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
          "youtube" : "",

        },
        {
          "name" : "Dalton Peters",
          "title" : "Co-Owner/Managing Partner",
          "twitter" : "",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Over 7 years of corporate finance & real estate experience working with Investment and Operations firms, responsible for cash flow forecasting; financial, credit and covenant analysis; investor, bank and financial statement reporting. Passionate Super Smash Bros. Wii U and Melee player. Former competitive World of Warcraft PvP and Team Fortress 2 player including heavy involvement in requisite communities.",
          "twitch" : "",
          "pic" : "About/AboutDalton.jpg",
          "website" : "",
          "youtube" : "",

        },
        {
          "name" : "Mikhail “Goo” Ivanushko",
          "title" : "Graphics Artist",
          "twitter" : "https://twitter.com/GooVisuals",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Graphics Generalist with a passion for competitive gaming and speedruns. Works in a wide range of areas, from 2D Motion Graphics to 3D Character Design and VFX. Currently pursuing a degree in applied neural networks.",
          "twitch" : "",
          "pic" : "About/AboutGoo.jpg",
          "website" : "",
          "youtube" : "https://www.youtube.com/c/goovisuals",

        },
        {
          "name" : "William “WGB” Back",
          "title" : "Lead Graphics Artist",
          "twitter" : "https://twitter.com/WILLGBACK",
          "linkedIn" : "",
          "resume" : "",
          "bio": "William has been designing for about seven years; starting off as a freelance designer, but making his way into his longtime passion as an eSports designer. He plans to bring all of this experience to Balance in order to provide the best quality design work he can.",
          "twitch" : "",
          "pic" : "About/AboutWGJ.jpg",
          "website" : "https://www.behance.net/williamback",
          "youtube" : "",

        },

        {
          "name" : "Jeffrey Gabriel",
          "title" : "Web Designer and Developer",
          "twitter" : "https://twitter.com/JeffKGabriel",
          "linkedIn" : "",
          "resume" : "",
          "bio" : "Competitive gaming fan and javascript junkie. Enjoys minimal web design. Currently interested in mobile development and social marketing.",
          "twitch" : "",
          "pic" : "About/AboutJeff2.jpg",
          "website" : "",
          "youtube" : "",
        },
        {
          "name" : "CherubiKnight",
          "title" : "Social Media Management",
          "twitter" : "https://twitter.com/CherubiKnight",
          "linkedIn" : "",
          "resume" : "",
          "bio": "eSports personality with 2 years of Social Media Management experience and Content Creation for YouTube and Twitch since 2009.  Signed by Aether eSports in 2014 then again by Most Valuable Gaming in 2015. Former Host of Mew2King's stream.",
          "twitch" : "",
          "pic" : "About/CherubiWebPic.png",
          "website" : "",
          "youtube" : "",
        },

      ],

      staffBios:[
        {
          "pic": "About/TypoWebPic.png",
          "bio": "Mike “Typo” Bassett has built an unparalleled reputation amongst professional Super Smash Bros Melee players as one of the knowledgeable and accessible controller modders in the scene. Typo’s controllers are used by dozens of the SSBMRank top 100 players and his busy travel schedule and mail order queue has brought his work to hundreds of North American customers since 2016.",
          "country": "USA",
          "name": "Mike Bassett",
          "fullName" : "Mike \"Typo\" Bassett",
          "age": 24,
          "twitch" : "www.twitch.tv/hrctypo",
          "twitchName" : "hrctypo",
          "twitter": ""

        },
        {
          "pic": "About/NFreakWebPic.png",
          "bio": "Tyler ‘NFreak’ Morrow is the founder and CEO of Mute City Customs. With little artistic background, NFreak kicked off MCC by trying his hand at a single custom Gamecube for Pound 2016. Since then, he has painted consoles for major tournaments such as Super Smash Con, Shine 2016, The Big House 6, and Royal Flush, and can usually be found assisting Typo and Serisium with controller modding services at events. NFreak plays an unconventional Falcon in Melee, and is a strong advocate for hitbox-style Smash controllers.",
          "country": "USA",
          "name": "Tyler Morrow",
          "fullName" : "Tyler \"NFreak\" Morrow",
          "age": 24,
          "twitch" : "www.twitch.tv/mcc_nfreak",
          "twitchName" : "mcc_nfreak",
          "twitter": ""

        },
        {
          "pic": "About/AboutDalton.jpg",
          "bio": "Over 7 years of corporate finance & real estate experience working with Investment and Operations firms, responsible for cash flow forecasting; financial, credit and covenant analysis; investor, bank and financial statement reporting. Passionate Super Smash Bros. Wii U and Melee player. Former competitive World of Warcraft PvP and Team Fortress 2 player including heavy involvement in requisite communities.",
          "country": "USA",
          "name": "Dalton Peters",
          "fullName" : "Dalton \"DTP\" Peters",
          "age": 26,
          "twitch" : "www.twitch.tv/DTP_OW",
          "twitchName" : "dtp_ow",
          "twitter": ""

        },
        {
          "pic": "About/AboutGraham3.jpg",
          "bio": "Entrepreneur with over 10 years of experience in the technology, e-commerce, e-sports and gaming industries. Highly motivated to grow within the e-sports market and invest further in its growth as well. Past entrepreneurship ventures include real market trading, tournament hosting, talent management, and content creation.",
          "country": "USA",
          "name": "Graham Peters",
          "fullName" : "Graham \"Virtua\" Peters",
          "age": 24,
          "twitch" : "www.twitch.tv/trvirtua",
          "twitchName" : "trvirtua",
          "twitter": ""

        },
        {
          "pic": "About/CherubiWebPic.png",
          "bio": "eSports personality with 2 years of Social Media Management experience and Content Creation for YouTube and Twitch since 2009.  Signed by Aether eSports in 2014 then again by Most Valuable Gaming in 2015. Former Host of Mew2King's stream.",
          "country": "USA",
          "name": "CherubiKnight",
          "fullName" : "CherubiKnight",
          "age": 26,
          "twitch" : "www.twitch.tv/Cherubiknight",
          "twitchName" : "cherubiknight",
          "twitter": ""

        },
      ]
    }
  },

  //mixins: [myHistory],

  render: function(){



    return(
      <div>
        <Header activeTab={this.props.location.pathname} />
        <Favicon url={require('../imgs/favicons/favicon-96x96.png')}/>

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
