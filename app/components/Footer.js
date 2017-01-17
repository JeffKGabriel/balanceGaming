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
        <div className="col-xs-12 col-md-10 col-md-offset-1">

          <div className="col-xs-4 footerLeftLinks">
            <div>
              About
            </div>
            <div>
              Contact
            </div>
            <div>
              Careers
            </div>
            <div>
              Cookie Policy
            </div>
          </div>

          <div className="col-xs-4 col-xs-offset-2 col-xs-5 col-md-offet-3 col-md-5 footerRightLinks">

            <div className="fa fa-twitter footerIcon" aria-hidden="true">
            </div>

            <div className="fa fa-facebook-square footerIcon" aria-hidden="true">
            </div>

            <div className="tradeMark">
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
