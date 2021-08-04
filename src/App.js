import './App.css';
import {Component} from 'react'
//import Giphy from './Gif.js'
class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      api_key: 'apikey=' + process.env.REACT_APP_APIKEY,
      query: '&q=',
      offset: 'offset=0'
    }
  }
   
  handleSubmit = (event)=> {
    event.preventDefault()

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${event.target.gifTitle.value}&offset=0`


    fetch(url)
    .then(response =>{
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='gifTitle'>Title</label>
          <input
            id='gifTitle'
            type='text'
          />
          <input
            type='submit'
            value='Find Gif Info'
          />
        </form>
        <div>
            {this.state.gif?.data.map(img=>{
                return(
                    <div>
                        <img src={img.images.downsized.url} alt="Alt text"></img>
                    </div>
                )
            })}
        </div>        
      </>
    );
  };
}

export default App;
