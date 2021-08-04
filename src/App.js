import './App.css';
import {Component} from 'react'
import Giphy from './Gif.js'
class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      api_key: 'apikey=' + process.env.REACT_APP_APIKEY,
      query: '&q=',
      //movieTitle: '',
      //searchURL: '',
      offset: 'offset=0'
    }
  }
   
  handleSubmit = (event)=> {
    event.preventDefault()

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${event.target.gifTitle.value}&offset=0`


    fetch(url)
    .then(response =>{
      //console.log('response.json', response.json())
      return response.json()
    }).then(json => 
      //console.log(json.data))
      this.setState({
      gif: json
    })
    , err => console.log(err))

    this.setState({
      searchURL: url
    })
  }
  render(){
    return (
      <>
      {/* onSubmit fires when the form is submitted by pressing enter */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='gifTitle'>Title</label>
          <input
            id='gifTitle'
            type='text'
            // onChange fires when there's a change in any of the form's input elem ents
            //onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Gif Info'
          />
        </form>
        {(this.state.gif) ?
        <Giphy gif={this.state.gif} /> : " "}
        
      </>
    );
  };
}

export default App;
