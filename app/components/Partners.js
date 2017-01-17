var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Background from './Background.js'
import Footer from './Footer.js'

const Partners = React.createClass({

  render: function(){

    return(
      <div className="col-sm-12">
      <Background />

      <div style={{
        marginTop:100,
      }}
      >
      </div>

        <div className="col-md-offset-1 col-md-10 col-xs-12">
          <div className="col-xs-12 partnerBox">
            <PartnerBox />
            <PartnerBox />
            <PartnerBox />
            <PartnerBox />
            <PartnerBox />
          </div>
        </div>


        <div className="col-sm-12 beforeFooter"></div>
        <Footer />
      </div>
    )
  },
});

const PartnerBox = React.createClass({

  render: function(){

    return(
      <div className="col-xs-4 partnerPanel"
        style={{
          padding:10,
        }}
      >
        <div className="partnerBoxShadow">
          <PartnerPic />
          <PartnerBio />
          <PartnerLinks />
        </div>
      </div>
    )

  },

});

const PartnerPic = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 partnerPic"
        style={{
          height:200
        }}
      >
       <img src="https://static1.squarespace.com/static/56e0692bf699bb8546ef30d8/t/57644eb915d5db8754e94a97/1479131022408/?format=750w" height="200" className="img-responsive" />
      </div>
    )

  },

});

const PartnerBio = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 partnerBio">
       Short ribs pork drumstick t-bone tri-tip ground round, ham capicola tail. Bacon prosciutto jerky, beef filet mignon cupim flank boudin ribeye short ribs landjaeger chuck salami pork chop meatball. Ham kielbasa cow meatball, biltong venison leberkas filet mignon andouille. Ball tip porchetta spare ribs ham hock ribeye shankle boudin sausage tongue prosciutto meatloaf corned beef short ribs. Meatball boudin chuck shank, hamburger ribeye meatloaf flank tenderloin. Salami fatback chicken cupim, capicola hamburger pork chop.
      </div>
    )

  },

});

const PartnerLinks = React.createClass({

  render: function(){

    return(
      <div className="col-xs-12 partnerLinks"
        style={{
          height:80,
          fontSize:36,
        }}
      >
         <div className="fa fa-twitter partnerLinkIcon" aria-hidden="true">
         </div>

         <div className="fa fa-facebook-square partnerLinkIcon" aria-hidden="true"
          style={{
            marginLeft:32,
          }}
         >
         </div>
         <div className="fa fa-globe partnerLinkIcon" aria-hidden="true"
           style={{
             marginLeft:30,
           }}
         >
         </div>
      </div>
    )

  },

});





// Map Redux state to component props
function mapStateToProps(state) {
  return {
    teams: state.rosterReducer
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
  mapStateToProps
)(Partners)
