var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

var HomeNewsHeader = (props) => {

  const {
    FacebookShareButton,
    TwitterShareButton,
  } = ShareButtons;

  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');


  var topNews = props.news[0];


  var boxPic = require('../imgs/'+topNews.boxPic);

  return(

    <div className="homeNewsHeader" style={{ textAlign: 'center'}}>

      <div
        className=" col-xs-12 col-sm-12 col-md-6"
        style={{
          paddingLeft:0,
          paddingRight:0,
        }}
      >
      <Link to={{ pathname: '/NewsPage' , state: { scrollToTop: true } , query:{id:topNews.id } }} >
        <div
          className="col-md-12 col-md-offset-0 col-sm-offset-2 col-sm-8 homeNewsPic"
          style={{
            zIndex:2,
            background : 'url(' + boxPic + ') no-repeat center center',
            height: 450,
            paddingTop:32,
          }}
        >


          <div className="homeNewsTitle">
            {topNews.title}
          </div>
          <div className="homeNewsTitle">

          </div>
          <div className="homeNewsDate">
            {topNews.date}
          </div>

        </div>

      </Link>


      </div>

      <div
        className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0 homeNewsArticleBox">

        <div
          className="homeNewsArticle col-sm-12"
        >
        {topNews.article}
        </div>

        <div
          className="homeNewsArticleReadMore col-sm-12"
        >
            <div className="homeNewsReadMoreSocial">

              <div className="shareButton">
                <FacebookShareButton url="http://104.131.167.44/#/newsPage?id=1" title="asdasd">
                  <FacebookIcon size={30} round={true} />
                </FacebookShareButton>
              </div>

              <div className="shareButton">
                <TwitterShareButton url="http://104.131.167.44/#/newsPage?id=1" title="asdasd">
                  <TwitterIcon size={30} round={true} />
                </TwitterShareButton>
              </div>

            </div>

            <div className="homeNewsReadMoreLink">
              <Link to={{ pathname: '/NewsPage' , state: { scrollToTop: true } , query:{id:topNews.id } }} >
                  Read More
              </Link>
            </div>


        </div>


      </div>


    </div>

  )

}

export default HomeNewsHeader
