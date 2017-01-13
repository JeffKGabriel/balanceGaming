var React = require('react');

var HomeHeader = (props) => {

  return(

    <div className="homeHeader" style={{ textAlign: 'center' , marginBottom:40}}>
      {props.children}
    </div>

  )

}

export default HomeHeader
