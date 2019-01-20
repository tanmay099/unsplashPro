import React, { Component } from 'react';
//import unsplash from 'unsplash-js/native';
import Thumbnail from './compnent/Thumbnail'

// ES Modules syntax
import './App.css';
//client credessentials to connect to api
const CLIENT = {
  KEY: '33759ce438c7e2846a9b4482cc6971848dc35468151a804ce02930aa4698a842',
  SECRET: '42f92a081f54722c063de3815f674de6f938ed5207f0f01f99b26025bfaf8002'
}
class App extends Component {

  constructor(props){
 super(props)
 this.state= {
   photos: null
 }
  }

  componentDidMount(){
    fetch('https://api.unsplash.com/photos/?client_id=' + CLIENT.KEY)
		.then(res => res.json())
		.then(data => {
    console.log('data:', data);
      	this.setState({ photos: data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
}

loadPhotos(){
  const {photos} = this.state;
  if(photos){
    console.log('here', photos);

 return  photos.map(img => <Thumbnail img={img}/>)
  }
  else{
    console.log('here')
  return (<div>No photos found</div>);
  }
}

  
  render() {
    return (
      <div className="App">
      {this.loadPhotos()}
      </div>
    );
  }
}

export default App;
