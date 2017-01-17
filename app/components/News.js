var React = require('react');
import ReactDOM from 'react-dom'

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


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


  getInitialState: function() {
    return {
      newsList : []
    }
  },

  componentWillMount: function () {
  },

  componentDidMount: function () {
  },

  componentDidUpdate() {
  },

  render: function(){




    //const articles = this.state.newsList.map((a,k) =>{
      const articles = this.props.news.map((a,k) =>{
        return(
          <NewsArticle
           key = {k}
           id = {a.id}
           title = {a.title}
           date = {a.date}
           article = {a.article}
           name = {a.name}
          />
        );
      });

    return(
      <div className="contentPage">
        <Background />

      <div
        className="col-sm-10 col-sm-offset-1"
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
      <div className="col-sm-12 beforeFooter"></div>
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

    var newsBanner = require('../imgs/lightBanner1.png');

    return (
      <div
        className="col-sm-12 newsPageList"
        style={{
          marginBottom: 120,
          paddingBottom: 80,
        }}
      >
        <Link to={{ pathname: '/newsPage' , query:{id:this.props.id } }} >

          <div className = "col-sm-12 newsBanner"
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
            className="col-sm-3 newsTitleBox"
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
        className="col-sm-8 newsArticleBox"
        style={{
        }}
      >
        {this.props.article}
      </div>

      <div className="shareNews col-sm-offset-3 col-sm-3">
        <div
          style={{
            marginLeft: 18,
            marginTop:32,
          }}>
              <div className="shareButton">
                <FacebookShareButton url="http://104.131.167.44/#/newsPage?id=1" title="asdasd">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </div>


              <div className="shareButton">
                <TwitterShareButton url="http://104.131.167.44/#/newsPage?id=1" title="asdasd">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </div>
          </div>
      </div>

      <div
        className="col-sm-offset-4 col-sm-1 "
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



//export default Footer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
