import React, {Component} from 'react';

import './Thumbnail.css'
//Thumbnail component to store image tile

class Thumbnail extends Component {
    
    render(){
      const {img } = this.props
        return(

          
            <div key={img.id} className="card-type-2" >
       <div className="img-c">
              <img src={img.urls.thumb} style={{width: 450, height: 400}} alt={'loading..'} /></div>
              <div className="clear-line"></div>
           <h4>{'Likes: ' + img.likes}</h4>
           <h4>{img.description ? img.description : 'No description available'}</h4>
           </div>
       
        )
    }
}

export default Thumbnail;