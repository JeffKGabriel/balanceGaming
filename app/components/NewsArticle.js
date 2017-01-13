var React = require('react');
var ReactRouter = require('react-router');

var NewsArticle = (props) =>{
  return (
    <div
      className="col-sm-12"
      style={{
        height: 200,
      }}
    >
      {props.id}
      {props.name}
    </div>
  )
}

export default NewsArticle
