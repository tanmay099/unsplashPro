import React, { Component } from 'react';
//import unsplash from 'unsplash-js/native';
import Search from './compnent/Search'
import Main from './compnent/Main'
import {Link, Route, Switch} from 'react-router-dom'

// ES Modules syntax
import './App.css';
//client credessentials to connect to api
const CLIENT = {
  KEY: '33759ce438c7e2846a9b4482cc6971848dc35468151a804ce02930aa4698a842',
  SECRET: '42f92a081f54722c063de3815f674de6f938ed5207f0f01f99b26025bfaf8002'
}

// const Body = () => (
  
// )

class App extends Component {

  constructor(props){
 super(props)
 this.state= {
   photos: null
 }
  }

  componentDidMount(){
    // api call for ist page photo loads
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

render() {
  const {photos} = this.state
  return  (
       <div>
<Header/>
 {photos ? <Body photos={photos}/> : <div>no photos found</div>}
       </div>
     );
  }
}
const Header = () => (
  <div>
     <Link to="/search">Search</Link>
  </div>
)
const Body = (photos) => ( 
  <div>
  <Switch>
  <Route exact path="/" render={() => <Main photos={photos} />}></Route>
  <Route  path="/search" component={Search}></Route>
  </Switch>
  </div>
)




export default App;
