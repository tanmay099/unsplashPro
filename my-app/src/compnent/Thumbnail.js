import React, {Component} from 'react';

import './Thumbnail.css'
//Thumbnail component to store image tile

class Thumbnail extends Component {

constructor(props){
 super(props)
}

    render(){
      const {img } = this.props
        return(

          
            <div className="card-type-2" >
       <div className="img-c">
              <img src={img.urls.small} style={{width: 400, height: 400}} /></div>
              <div className="clear-line"></div>
           <h4>{'Likes: ' + img.likes}</h4>
           </div>
       
        )
    }
}

export default Thumbnail;