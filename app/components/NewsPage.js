var React = require('react');

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const NewsPage = React.createClass({

  render: function(){

    //console.log(this);
    const index = this.props.news.findIndex((m) => m.id == this.props.location.query.id);
    let chosenArticle = (index >= 0 ? this.props.news[index].article : "")
    let chosenTitle = (index >= 0 ? this.props.news[index].title : "")

    return(
      <div
        className="col-sm-12 newsPage"
        style={{
          height: 300,
          backgroundColor:"#0F0",
        }}
      >
        {chosenArticle}
        <br />
        {chosenTitle}
      </div>
    )
  },

});

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
