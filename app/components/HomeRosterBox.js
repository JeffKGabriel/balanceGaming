var React = require('react');

import HomeRosterPanel from './HomeRosterPanel.js'

const HomeRosterBox = React.createClass({

  render: function (){

    var overwatchLogo = require('../imgs/overwatchLogo.png');
    var smashLogo = require('../imgs/smashLogo2.jpg');
    var dotaLogo = require('../imgs/dotaLogo.png');

    var rosterInfoSumail={
      age:17,
      name: "Sumail",
      country:"Pakistan",
      pic: require('../imgs/sumailRoster.jpg') ,
      id:3 ,
    }
    var rosterInfoArteezy={
      age:24,
      name: "Arteezy",
      country:"Canada",
      pic: require('../imgs/arteezyRoster.png'),
      id:2 ,
    }
    var rosterInfoFlash={
      age:26,
      name: "Flash",
      country:"South Korea",
      pic: require('../imgs/flashRoster.jpg'),
      id:6 ,
    }
    var rosterInfoIsai={
      age:31,
      name: "Isai",
      country:"USA",
      pic: require('../imgs/isaiRoster.png'),
      id:4 ,
    }

//  <HomeRosterPanel info={rosterInfoArteezy} />

//  <HomeRosterPanel info={rosterInfoIsai} />



  return(

    <div
      className="col-xs-12 noPadding"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >



      <div className="rosterPanelBox col-xs-12 col-sm-9 col-lg-8 col-xl-6">

        <div className="homeRosterTeamSelect hidden">

          <div className="homeRosterThumb"
            style={{
              background : 'url(' + smashLogo + ') no-repeat center center',
              backgroundSize : '80px 80px',
            }}
          >
          </div>

        </div>





      </div>

    </div>

  )
}

});

export default HomeRosterBox
