var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


const Header = React.createClass({
//var Header = (props) =>{

getInitialState() {
    return {
      mobileClass : "headerMenuSmall"
    };
  },

render: function(){


  var activateMobileMenu =(active)=>{
    if(this.state.mobileClass == "headerMenuSmall"){
      this.setState({mobileClass : "headerMenuSmallActive"})
    }else{
      this.setState({mobileClass : "headerMenuSmall"})
    }
    if (active == "inactive"){
      this.setState({mobileClass : "headerMenuSmall"})
    }

    console.log("changing mobile Class to active",this.state.mobileClass);
  }



    var sliderOffset = 31; //Home
    switch(this.props.activeTab.substring(1)){
      case "News":
        sliderOffset = 31;
        break;
      case "Rosters":
        sliderOffset = 102;
        break;
      case "Team":
        sliderOffset = 102;
        break;
      case "PlayerProfile":
        sliderOffset = 102;
        break;
      case "Streams":
        sliderOffset = 184;
        break;
      case "Media":
        sliderOffset = 261;
        break;
      case "Partners":
        sliderOffset = 338;
        break;
      case "About":
        sliderOffset = 414;
        break;
    }

    return(
      <div className="col-xs-12 animated fadeInDown siteHeader noPadding">

        <div className="col-md-offset-2 col-md-8 col-xs-12 noPadding">

          <div className="col-md-2 hidden-sm hidden-xs"
          style={{
            opacity: 0.8,
            padding:0,
          }}
          >
            <Link to={{ pathname:'/Home', state: { scrollToTop: true } }}>
              <img src={require('../imgs/Balance_Logo_B_grad.png')} style={{ height:72 , paddingTop:6}} />
            </Link>
          </div>

            <div className="headerMenu hidden-xs hidden-sm">

              <ul className="MenuUL">

                <Link to={{ pathname:'/News', state: { scrollToTop: true } }}>
                  <li>News</li>
                </Link>

                <Link to={{ pathname:'/Rosters', state: { scrollToTop: true } }}>
                  <li>Rosters</li>
                </Link>

                <Link to={{ pathname:'/Streams', state: { scrollToTop: true } }}>
                  <li>Streams</li>
                </Link>

                <Link to={{ pathname:'/Media', state: { scrollToTop: true } }}>
                  <li>Media</li>
                </Link>

                <Link to={{ pathname:'/Partners', state: { scrollToTop: true } }}>
                  <li>Partners</li>
                </Link>

                <Link to={{ pathname:'/About', state: { scrollToTop: true } }}>
                  <li>About</li>
                </Link>

              </ul>

              <div className="headerSlider hidden-xs hidden-sm"
                style={{
                  transform: 'translateX('+sliderOffset+'px)',
                }}
              >
              </div>

            </div>

            <div className={this.state.mobileClass == "headerMenuSmall" ? 'headerMenuSmall hidden-md hidden-lg hidden-xl' : 'headerMenuSmallActive hidden-md hidden-lg hidden-xl'}>

              <ul className="MenuULSmall col-xs-12 col-sm-8 col-sm-offset-2 noPadding">

                <Link to={{ pathname:'/Home', state: { scrollToTop: true } }}>
                  <img src={require('../imgs/Balance_Logo_B_grad.png')} style={{ height:72 , paddingTop:6}} onClick={ ()=>{ activateMobileMenu("inactive") } }/>
                </Link>


                <div className="fa fa-bars" aria-hidden="true"
                  style={{
                    fontSize:36,
                    cursor: 'pointer',
                  }}
                  onClick={ ()=>{ activateMobileMenu() } }
                  >
                </div>
              </ul>


                {
                  this.state.mobileClass == "headerMenuSmallActive"

                  ?
                  <ul className="MenuULSmallActive">

                    <Link to={{ pathname:'/News', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>News</li>
                    </Link>

                    <Link to={{ pathname:'/Rosters', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>Rosters</li>
                    </Link>

                    <Link to={{ pathname:'/Streams', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>Streams</li>
                    </Link>

                    <Link to={{ pathname:'/Media', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>Media</li>
                    </Link>

                    <Link to={{ pathname:'/Partners', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>Partners</li>
                    </Link>

                    <Link to={{ pathname:'/About', state: { scrollToTop: true } }} onClick={ ()=>{ activateMobileMenu("inactive") }} >
                      <li>About</li>
                    </Link>


                  </ul>

                  :

                  null

                }


                  <div className="headerSlider hidden-xs hidden-sm"
                    style={{
                      transform: 'translateX('+sliderOffset+'px)',
                    }}
                  >
                  </div>
                


            </div>





        </div>

      </div>
    )
  }
})

export default Header
