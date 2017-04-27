var React = require('react');
import ReactDOM from 'react-dom'

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Linkify from 'react-linkify'


//var HomeHeader = require('./HomeHeader');
import HomeHeader from './HomeHeader.js'

import Background from './Background.js'



//var NewsPage = require('./NewsPage');
import NewsPage from './NewsPage.js'

import Footer from './Footer.js'

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';




const News = React.createClass({

  render: function(){

    //const articles = this.state.newsList.map((a,k) =>{
    //  const articles = this.props.news.map((a,k) =>{
    const articles = this.props.children.passState.news.map((a,k) =>{
        return(
          <NewsArticle
           key = {k}
           id = {a.id}
           title = {a.title}
           date = {a.date}
           article = {a.article}
           name = {a.name}
           banner = {a.banner}
          />
        );
      });

    return(
      <div className="contentPage">
        <Background />

      <div
        className="col-sm-10 col-sm-offset-1 noPadding"
        style={{
          paddingTop: 160,
        }}
      >
        <HomeHeader>News</HomeHeader>
        <div className="col-sm-12"
          style={{
            height:60,
          }}
        >
        </div>
          {articles}
      </div>
      <div className="col-xs-12 hidden-xs beforeFooter"></div>
      <Footer />
      </div>
    )
  }
});





const NewsArticle = React.createClass({



  render : function(){

    const {
      FacebookShareButton,
      TwitterShareButton,
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');

    var newsBanner = require('../imgs/'+this.props.banner);

    const paragraphs = this.props.article.map((a,k)=>{
      return(
        <ArticleParagraph
         key = {k}
         paragraph = {a}
        />
      )
    })

    return (
      <div
        className="col-xs-12 noPadding newsPageList"
        style={{
          marginBottom: 120,
          paddingBottom: 80,
        }}
      >
        <Link to={{ pathname: '/newsPage' , query:{id:this.props.id } }} >

          <div className = "col-xs-12 newsBanner noPadding"
              style={{
                height:260,
                background : 'url(' + newsBanner + ') no-repeat center center',
                backgroundSize : 'cover',
                marginBottom: 60,
              }}
          >
          </div>

        </Link>
        <Link to={{ pathname: '/newsPage' , query:{id:this.props.id } }} >
          <div
            className="col-md-3 hidden-xs hidden-sm newsTitleBox"
            style={{
              height:160,
            }}
          >
            <div className="newsTitle">
              {this.props.title}
            </div>
            <div className="newsDate">
              {this.props.date}
            </div>
          </div>

          <div
            className="col-xs-12 hidden-md hidden-lg hidden-xl newsTitleBoxSmall"
            style={{
              height:160,
            }}
          >
            <div className="newsTitle">
              {this.props.title}
            </div>
            <div className="newsDate">
              {this.props.date}
            </div>
          </div>

        </Link>


      <div
        className="col-xs-12 col-md-8 newsArticleBox"
        style={{
        }}
      >
        {paragraphs}
      </div>

      <div className="shareNews col-xs-offset-1 col-xs-5 col-sm-offset-3 col-sm-3">
        <div
          style={{
            marginLeft: 18,
            marginTop:32,
          }}>
              <div className="shareButton">
                <FacebookShareButton url="http://104.131.167.44/#/newsPage?id=1" title={this.props.title}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </div>


              <div className="shareButton">
                <TwitterShareButton url="http://104.131.167.44/#/newsPage?id=1" title={this.props.title}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </div>
          </div>
      </div>

      <div
        className="col-xs-offset-4 col-xs-1 "
        style={{
          height: 60,
        }}
      >
        <Link to={{ pathname: '/newsPage' , query:{id:this.props.id } }} >
          <div className="newsArticleReadMore btn btn-default"
            style={{
              height: 40,
              float: 'right',
              marginTop:30,
              marginRight:20,
              opacity:0.7,
            }}
          >
            <i className="glyphicon glyphicon-arrow-right"
              aria-hidden="true"
              style={{
                fontSize:26,
                color:'#999'
              }}
            ></i>
          </div>
        </Link>

      </div>

      </div>
    );
  },
});



const ArticleParagraph = React.createClass({

  render: function(){


    return(
      <div style={{paddingBottom:12}}>
        <Linkify>
          {this.props.paragraph}
        </Linkify>
      </div>
    )
  }

})


/*

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    news: state.newsReducer
  }
}

// Map Redux actions to component props

function mapDispatchToProps(dispatch) {
  return {
    //onIncreaseClick: () => dispatch(increaseAction),
    //onDecreaseClick: () => dispatch(decreaseAction)
  }
}

*/



export default News
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
*/
