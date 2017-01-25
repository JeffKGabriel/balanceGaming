var React = require('react');

var HomeHeader = (props) => {

  if(props.logo != null){

    return(
      <div className="homeHeader" style={{ textAlign: 'center' , marginBottom:40, fontSize: props.fontSize}}>
        <HeaderLogo src={props.logo} />
        {props.children}
      </div>
    )
  }else{
    return(
      <div className="homeHeader" style={{ textAlign: 'center' , marginBottom:40, fontSize: props.fontSize}}>
        {props.children}
      </div>
    )
  }



}

const HeaderLogo = (props) => {
  var logoSrc = require('../imgs/'+props.src)
  return(
    <img src={logoSrc} style={{ height: 60, width:60, marginRight:20 , marginTop:-10}} />
  )
}

export default HomeHeader
