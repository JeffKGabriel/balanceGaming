var React = require('react');
import { connect } from 'react-redux'
var ReactRouter = require('react-router');
import {push, replace} from 'react-router-redux';
import { bindActionCreators } from 'redux'
var Link = ReactRouter.Link;

const increaseAction = { type: 'increase', amount: 1 }
const decreaseAction = { type: 'decrease', amount: 2 }



const Footer = React.createClass({


  handleLogoClick: () => {
    //console.log("handling the click lol");
    //console.log(this.props);
    //ev.preventDefault();
    //this.props.onNavigateTo('/News');
  },


  render: function(){


    //const { value, news, onIncreaseClick, onDecreaseClick } = this.props;
    const {handleLogoClick} = this.props;

    /*
    var newsArticles = news.map(function(obj,i) {
            return <div key={i}>{obj.article}</div>;
        });

        */





    return(
      <div className="col-xs-12 footer navbar-fixed-bottom">

        <div className="col-xs-12 col-md-10 col-md-offset-1 noPadding">

          <div className="col-xs-4 footerLeftLinks hidden-xs">
            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                About
              </div>
            </Link>

            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                Contact
              </div>
            </Link>

            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                Careers
              </div>
            </Link>

          </div>

          <div className="col-xs-4 footerLeftLinksSmall noPadding hidden-sm hidden-md hidden-lg hidden-xl">
            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                About
              </div>
            </Link>

            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                Contact
              </div>
            </Link>

            <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
              <div>
                Careers
              </div>
            </Link>

          </div>

          <div className="col-xs-4 hidden-md hidden-lg hidden-xl"
            style={{
              height:90,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
            }}>

            <a href="https://www.youtube.com/channel/UCan0P1RBTw5begkZbkBpTjA">
              <div className="fa fa-youtube-play footerIcon" aria-hidden="true"
                style={{
                  margin:6,
                }}>
              </div>
            </a>

            <a href="https://www.twitch.tv/balanceesports">
              <div className="fa fa-twitch footerIcon" aria-hidden="true"
                style={{
                  margin:6,
                }}>
              </div>
            </a>

            <a href="https://twitter.com/esportsbalance">
              <div className="fa fa-twitter footerIcon" aria-hidden="true"
                style={{
                  margin:6,
                }}>
              </div>
            </a>

            <a href="https://www.facebook.com/BalanceGaming/">
              <div className="fa fa-facebook-square footerIcon" aria-hidden="true"
                style={{
                  margin:6,
                }}>
              </div>
            </a>
          </div>


          <div className="col-xs-4 col-xs-offset-0 col-md-offset-3 col-md-5 footerRightLinks noPadding">

          <div className="hidden-xs hidden-sm">

            <a href="https://www.youtube.com/channel/UCan0P1RBTw5begkZbkBpTjA">
              <div className="fa fa-youtube-play footerIcon" aria-hidden="true">
              </div>
            </a>

            <a href="https://www.twitch.tv/balanceesports">
              <div className="fa fa-twitch footerIcon" aria-hidden="true">
              </div>
            </a>

            <a href="https://twitter.com/esportsbalance">
              <div className="fa fa-twitter footerIcon" aria-hidden="true">
              </div>
            </a>

            <a href="https://www.facebook.com/BalanceGaming/">
              <div className="fa fa-facebook-square footerIcon" aria-hidden="true">
              </div>
            </a>
          </div>

            <div className="tradeMark"
              style={{
                cursor: 'default',
              }}>
              © 2017  Balance Gaming
            </div>

          </div>


        </div>
      </div>
    )
  }

});


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    //value: state.counter.count,
    //news: state.newsReducer
  }
}

// Map Redux actions to component props

function mapDispatchToProps(dispatch) {
  return {

    //onNavigateTo(dest) {
    //  dispatch(push(dest));
    //}

    handleLogoClick: () =>{
      //this.props.state = {asd :'123'}
      dispatch(replace({
        pathname:'/News',
        state:{scrollToTop:true}
      }))

    }


    //onIncreaseClick: () => dispatch(increaseAction),
    //onDecreaseClick: () => dispatch(decreaseAction)
  }
}



//export default Footer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
