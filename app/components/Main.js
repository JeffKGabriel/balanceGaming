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

        /*
        {
          "game": "Streamers",
          "pic": "About/AboutMadrid.jpg",
          "bio": "Daniel has been playing competitively since he could hold a controller, and after winning his first LAN for Halo 2 as a kid he knew he wanted to pursue a career in eSports. He then competed in Wrestling throughout high school, building and honing the competitive skills he now applies in Overwatch. In the Support role Daniel not only heals and saves his teammates but makes mid-fight plays to sway the teamfight in our favor.",
          "country": "USA",
          "name": "Viral",
          "fullName" : "Daniel \"Viral\" Madrid",
          "role": "Streamer",
          "age": 20,
          "twitch" : "https://www.twitch.tv/viralow",
          "twitchName" : "viralow",
          "twitter" : "https://twitter.com/Viral_OW",
          "id": 1,
        },
        */
        {
          "game": "Streamers",
          "pic": "RosterGames/OW_light.png",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "country": "USA",
          "name": "Raalts",
          "fullName" : "Hailey \"Raalts\" Sears",
          "role": "Streamer",
          "age": 0,
          "twitch" : "https://www.twitch.tv/raalts",
          "twitchName" : "raalts",
          "twitter" : "https://twitter.com/_Raalts",
          "id": 1,
        },
        {
          "game": "Streamers",
          "pic": "RosterGames/OW_light.png",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "country": "USA",
          "name": "Readtitle",
          "fullName" : "Josh \"Readtitle\" Milhem",
          "role": "Streamer",
          "age": 0,
          "twitch" : "https://www.twitch.tv/readtitle",
          "twitchName" : "readtitle",
          "twitter" : "https://twitter.com/TwitchRead",
          "id": 2,
        },
        {
          "game": "Melee",
          "pic": "About/byrox.jpg",
          "bio": "Ranked 1st on the Colorado Power Rankings and 28th on the Summer 2018 MPGR is Justin “Syrox” Burroughs, a Fox main from Colorado. Justin found a love for Super Smash Bros. Melee at the start of his teenage years, and has always strived to become the best by displaying his passion for the game. He started competing in major events in 2014, and quickly rose in ranks the following year. Recent notable wins from this iconic player include beating Shroomed at Genesis 5, resulting in a 17th placing, and SFAT at The Mango, taking an incredible 3rd place overall.  You can always expect to see Justin provide an exciting, fluid playstyle during his matches as he displays his finesse with his movement and punish game.",
          "country": "USA",
          "name": "Syrox",
          "fullName" : "Justin \"Syrox\" Burroughs",
          "role": "Fox",
          "age": 19,
          "twitch" : "https://www.twitch.tv/syroxm",
          "twitchName" : "syroxm",
          "twitter" : "https://twitter.com/SyroxM",
          "id": 6,
        },

        {
          "game": "Melee",
          "pic": "About/druggedFox.jpg",
          "bio": "Sami “Druggedfox” Muhanna, a Fox main hailing from Atlanta, Georgia, is known for his extremely technical punish-based playstyle. He derives most of his knowledge from his previous mains, Sheik and Falco, but currently implements everything he’s learned into his Fox play. Sami is established as one of the best, as he’s seen at the top of the Georgia Melee Power Rankings, and was ranked an astounding 12th on the 2017 SSBMRank. He’s not only a great player and a top tier analyst, but he considers himself a student of the game, and is only looking to push his limits even further.",
          "country": "USA",
          "name": "Druggedfox",
          "fullName" : "Sami \"Druggedfox\" Muhanna",
          "role": "Fox",
          "age": 25,
          "twitch" : "https://www.twitch.tv/druggedfox",
          "twitchName" : "druggedfox",
          "twitter" : "https://twitter.com/Druggedfox",
          "id": 7,
        },

        {
          "game": "Melee",
          "pic": "About/kjh.png",
          "bio": "Kalindi “KJH” Henderson is a well-known Fox main from Detroit, Michigan, and currently holds 2nd place in the Michigan Power Rankings, and 24th on the Summer 2018 MPGR. Kalindi is known for his excellent matchup knowledge against Samus mains, which is uncommon among most Fox mains. He recently achieved notable wins against Crush at Flatiron 3, and Duck at Smash Valley VII, who were ranked 15th and 14th respectively on the 2017 SSBMRank at the time. He continues to display strong promise as a top competitor, and is always a force to be reckoned with in bracket. Besides competing, Kalindi also provides in-depth match analyses as well as a separate series of informative YouTube videos called “The Fox Privilege Series.",
          "country": "USA",
          "name": "KJH",
          "fullName" : "Kalindi \"KJH\" Henderson",
          "role": "Fox",
          "age": 24,
          "twitch" : "",
          "twitchName" : "",
          "twitter" : "https://twitter.com/spotdodge_shine",
          "id": 8,
        },

        {
          "game": "Melee",
          "pic": "About/SleepyWebPic.png",
          "bio": "John “SleepyK” Lee has been a longstanding member of the Melee community ever since 2007. He spent many years helping other players improve technically and mentally at the game, and has authored a comprehensive guide as an aid for new, struggling, or veteran players looking to up their game. Although now mostly a commentator for event matches, John has placed notably well over the years, particularly in doubles, coming out in 3rd at Bad Moon Rising with s0ft, and placing in the top 8 at EVO 2016 alongside DruggedFox.",
          "country": "USA",
          "name": "Sleepyk",
          "fullName" : "John \"Sleepyk\" Lee",
          "role": "Manager",
          "age": 28,
          "twitch" : "https://www.twitch.tv/sleepyk",
          "twitchName" : "sleepyk",
          "twitter" : "https://twitter.com/sleepike",
          "id": 9,
        },

        {
          "game": "Smash 4",
          "pic": "About/ryo.jpg",
          "bio": "Thomas Arthur Janky II, also known by the name Ryo, is the greatest Ike main in Super Smash Bros. Wii U. His legacy resides in the city of Gainesville, Florida and continues to dominate the scene that started the ascension for his career as one of the most notable players in the game! His skills as a player are not only iconic but the use of his wisdom to guide his scene and students to a greater skill through his teachings and leadership is outstanding. Throughout the years, Ryo has established his legacy through both Singles and Doubles solidifying himself as one of the most feared players to encounter in bracket. His ways of deceiving his opponents by bringing the characters to their maximum potential and being recognized for a style which  can only be called as \"Ryo's Reads\" is what makes him such a punishing opponent to go up against. Ryo has now set his course to fight for his friends of Balance Gaming while creating a new chapter in his legacy since after all, none shall receive sympathy from him!",
          "country": "USA",
          "name": "Ryo",
          "fullName" : "Thomas \"Ryo\" Janky II",
          "role": "Ike",
          "age": 28,
          "twitch" : "https://www.twitch.tv/ryoguikido",
          "twitchName" : "ryoguikido",
          "twitter" : "https://twitter.com/Ryo_Guikido",
          "id": 10,
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
