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
      pic: require('../imgs/sumailRoster.jpg')
    }
    var rosterInfoArteezy={
      age:24,
      name: "Arteezy",
      country:"Canada",
      pic: require('../imgs/arteezyRoster.png')
    }
    var rosterInfoFlash={
      age:26,
      name: "Flash",
      country:"South Korea",
      pic: require('../imgs/flashRoster.jpg')
    }
    var rosterInfoIsai={
      age:31,
      name: "Isai",
      country:"USA",
      pic: require('../imgs/isaiRoster.png')
    }





  return(

    <div
      className="col-sm-12"
      style={{
        height:530,
      }}
    >

      <div className="col-sm-2 homeRosterTeamSelect">
        <div className="homeRosterThumb"
          style={{
            background : 'url(' + overwatchLogo + ') no-repeat center center',
            backgroundSize : '120px 120px',
          }}
        >
        </div>
        <div className="homeRosterThumb"
          style={{
            background : 'url(' + smashLogo + ') no-repeat center center',
            backgroundSize : '120px 120px',
          }}
        >
        </div>
        <div className="homeRosterThumb"
          style={{
            background : 'url(' + dotaLogo + ') no-repeat center center',
            backgroundSize : '150px 150px',
          }}
        >
        </div>
      </div>
      <div className="col-sm-10 rosterPanelBox">

        <HomeRosterPanel info={rosterInfoSumail} />

        <HomeRosterPanel info={rosterInfoArteezy} />

        <HomeRosterPanel info={rosterInfoFlash} />

        <HomeRosterPanel info={rosterInfoIsai} />

      </div>

    </div>

  )
}

});

export default HomeRosterBox
