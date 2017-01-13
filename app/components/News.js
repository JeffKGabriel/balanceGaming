var React = require('react');
import ReactDOM from 'react-dom'

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


//var HomeHeader = require('./HomeHeader');
import HomeHeader from './HomeHeader.js'


//var NewsPage = require('./NewsPage');
import NewsPage from './NewsPage.js'


const News = React.createClass({


  getInitialState: function() {
    return {
      newsList : []
    }
  },


  componentWillMount: function () {
    /*
    mongoHelper.getNewsArticles()
      .then(function (response) {

        response.data.map( m => {
          this.setState({
            newsList: [ m , ...this.state.newsList]
          })
        });

      }.bind(this));
      */


  },


  componentDidMount: function () {
    //console.log("componentDidMount");
    //console.log(this.props.location.query.i);
  },

  componentDidUpdate() {
    //window.scrollTo(0,0);
  },

  render: function(){
    //window.scrollTo(0,0);
    //console.log(this.props);



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
      <div>
        <div
          className="col-sm-12 homeBackground"
          style={{
            height:1300,
            //background : 'url(' + 'https://images.unsplash.com/photo-1474518665815-99456f56c531?dpr=2&auto=format&fit=crop&w=1500&h=844' + ') no-repeat center center',
            background : 'url(' + 'https://cdn.wallpaperdirect.com/shared-assets/images/products/120170orig.jpg' + ') repeat ',
            backgroundSize : '',
            backgroundColor : "#FFF",
            opacity:0.1,
            position: 'absolute',
          }}
        >
        </div>
        <div className="col-sm-12 homeBackgroundAfter"> </div>

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
      </div>
    )
  }
});





const NewsArticle = React.createClass({



  render : function(){

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
                marginBottom: 40,
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
      <div
        className="col-sm-offset-10 col-sm-1 "
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
