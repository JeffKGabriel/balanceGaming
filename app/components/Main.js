var React = require('react');

import Header from './Header.js'
import Footer from './Footer.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/index.css');

import myHistory from './myHistory.js'


const Main = React.createClass({

  mixins: [myHistory],

  render: function(){
    return(
      <div>
        <Header activeTab={this.props.location.pathname} />
          <ReactCSSTransitionGroup
            transitionName = "myAppear"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
          </ReactCSSTransitionGroup>
          <Footer />
      </div>
    )
  },
});

export default Main
