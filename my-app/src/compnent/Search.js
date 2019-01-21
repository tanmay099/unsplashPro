import React, {Component} from 'react';
import Thumbnail from './Thumbnail';

const CLIENT = {
    KEY: '33759ce438c7e2846a9b4482cc6971848dc35468151a804ce02930aa4698a842',
    SECRET: '42f92a081f54722c063de3815f674de6f938ed5207f0f01f99b26025bfaf8002'
  }
class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
         query: '',
         photos: null
        }
    }
    componentDidMount(){
        console.log('serach loads')
    }
    loadPhotos(){
        const {photos} = this.state;
        if(photos){
            return  photos.map(img => <Thumbnail img={img}/>)
        }
        else {  
        return (<div>No photos found</div>);
        }
      }
    onSubmitSearch =(query) => {
        if(query === ''){
            return alert('please enter a query');
        }
        fetch('https://api.unsplash.com/search/photos/?'+'query='+query+'&client_id=' + CLIENT.KEY)
		.then(res => res.json())
		.then(data => {
        console.log('data:', data);
      	this.setState({ photos: data.results });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});

    }

    render(){
        const {photos} = this.state;
        return(
            <div>
                <input value={this.state.query} onChange={(event) => this.setState({query: event.target.value}) } type='text' /><button  onClick={this.onSubmitSearch.bind(this, this.state.query)} >Search</button>
           {photos ? <div className={'App'}>{this.loadPhotos()}</div>: <div>Search photos</div>}
            </div>
        )
    }
}
export default Search;