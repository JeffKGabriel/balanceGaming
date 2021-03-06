var React = require('react');

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Linkify from 'react-linkify'


import Background from './Background.js'

import Footer from './Footer.js'

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';




const NewsPage = React.createClass({

  render: function(){

    const {
      FacebookShareButton,
      TwitterShareButton,
    } = ShareButtons;


    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');


    const index = this.props.children.passState.news.findIndex((m) => m.id == this.props.location.query.id);

    let chosenArticle = (index >= 0 ? this.props.children.passState.news[index].article : "")
    let chosenTitle = (index >= 0 ? this.props.children.passState.news[index].title : "")
    let date = (index >= 0 ? this.props.children.passState.news[index].date : "")
    let banner = (index >= 0 ? this.props.children.passState.news[index].banner : "")


    var newsBanner = require('../imgs/'+banner)

    const paragraphs = chosenArticle.map((a,k)=>{
      return(
        <ArticleParagraph
         key = {k}
         paragraph = {a}
        />
      )
    })


    return(
      <div className="col-sm-12 contentPage">
      <Background />

      <div className = "col-sm-offset-1 col-sm-10 newsBanner"
          style={{
            height:260,
            background : 'url(' + newsBanner + ') no-repeat center center',
            backgroundSize : 'cover',
            marginBottom: 40,
            marginTop:120,
          }}
      >
      </div>

        <div className="col-sm-offset-2 col-sm-8">


          <div className="newsPageTitle">
            <div>
            {chosenTitle}
            </div>
            <div className="newsPageDate">
              {date}
            </div>
          </div>

          <div className="newsPageArticle col-sm-offset-1 col-sm-10">
            {paragraphs}
          </div>

          <div className="shareNews col-xs-offset-4 col-xs-5 col-sm-offset-1 col-sm-5">
            <div
              style={{
                marginLeft: 0,
                marginTop:32,
              }}>

              <div className="shareButton">
                <FacebookShareButton url={"http://balance-gaming.com/#/newsPage?id="+this.props.location.query.id} title={chosenTitle}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </div>


              <div className="shareButton">
                <TwitterShareButton url={"http://balance-gaming.com/#/newsPage?id="+this.props.location.query.id} title={chosenTitle}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </div>

              </div>
          </div>

        </div>
        <div className="col-sm-12 beforeFooter">
        </div>
        <Footer />
      </div>
    )
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



export default NewsPage

/*

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    //value: state.counter.count,
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
  //mapDispatchToProps
)(NewsPage)

*/
