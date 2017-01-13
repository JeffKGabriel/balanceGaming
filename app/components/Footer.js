var React = require('react');
import { connect } from 'react-redux'
var ReactRouter = require('react-router');
import { bindActionCreators } from 'redux'
var Link = ReactRouter.Link;

const increaseAction = { type: 'increase', amount: 1 }
const decreaseAction = { type: 'decrease', amount: 2 }



const Footer = React.createClass({


  render: function(){

    //const { value, news, onIncreaseClick, onDecreaseClick } = this.props;

    /*
    var newsArticles = news.map(function(obj,i) {
            return <div key={i}>{obj.article}</div>;
        });

        */





    return(
      <div
        className="col-sm-12 footer animated fadeInUp">
        Footer

        <div className="loginFooter">
          <Link to='/Login'>
            login
          </Link>
        </div>


        <div>

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
    //onIncreaseClick: () => dispatch(increaseAction),
    //onDecreaseClick: () => dispatch(decreaseAction)
  }
}



//export default Footer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
