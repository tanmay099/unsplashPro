import React, {Component} from 'react';
import Thumbnail from './Thumbnail'


class Main extends Component {
    componentDidMount(){
    console.log('props in main: ', this.props)
    }
    loadPhotos(){
        const {photos} = this.props;
        if(photos.photos){
          console.log('here', photos);
      
       return  photos.photos.map(img => <Thumbnail img={img}/>)
        }
        else{
          console.log('here')
        return (<div>No photos found</div>);
        }
      }
    render(){
        
        return(
            <div>
            
            <div className="App">
           {this.loadPhotos()}
           </div>
          </div> 
        );
    }
}
export default Main;