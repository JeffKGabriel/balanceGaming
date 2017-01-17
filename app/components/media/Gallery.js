import React from 'react'

const Gallery = React.createClass({



  render: function(){

    var imgs = [
      {
        height: 200,
        width: 400,
      },
      {
        height: 400,
        width: 200,
      },
      {
        height: 200,
        width: 400,
      },
      {
        height: 400,
        width: 200,
      }

    ]

    const pics = imgs.map( (a,k) => {
      return(
        <GalleryPic height={a.height} width={a.width} key={k} />
      )
    });

    return(
      <div className="col-xs-12 galleryBox">
        {pics}
      </div>
    )
  }
});

const GalleryPic = React.createClass({


  render: function(){

    let imgSrc = "http://lorempixel.com/"+this.props.width+"/"+this.props.height+"/";


    return(
      <img src={imgSrc} height={this.props.height} width={this.props.width} />
    )
  }
});

export default Gallery
