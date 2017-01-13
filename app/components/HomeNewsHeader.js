var React = require('react');

var HomeNewsHeader = (props) => {


  var rtzHead = require('../imgs/rtzHeadRed.png');

  return(

    <div className="homeNewsHeader" style={{ textAlign: 'center'}}>

      <div
        className="col-sm-6"
        style={{
          paddingLeft:0,
          paddingRight:0,
        }}
      >
        <div
          className="col-sm-12 homeNewsPic"
          style={{
            zIndex:2,
            background : 'url(' + rtzHead + ') no-repeat center center',
            height: 450,
            paddingTop:32,
          }}
        >


          <div className="homeNewsTitle">
            Arteezy Joins
          </div>
          <div className="homeNewsTitle">
            Dota Team
          </div>
          <div className="homeNewsDate">
            Jan 3, 2017
          </div>

        </div>


      </div>

      <div
        className="col-sm-6 homeNewsArticleBox"
        style={{
          paddingRight:0,
          paddingLeft:0,
          height:350,
          marginTop:50,
          display:'flex',
          backgroundColor: '#FFF',
        }}
      >


        <div
          className="homeNewsArticle col-sm-12"
        >
        There aare many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
        </div>


      </div>


    </div>

  )

}

export default HomeNewsHeader
