import Body from './components/Body/Body';
import 'tachyons';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import { Component } from 'react';

// function App() {
class App extends Component {
  constructor() {
    super()
    this.state = {
      input:'',
      city:'',
      weatherData:{},
      bgStyle : {
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onSubmit = () => {
    this.setState({city:this.state.input},() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=5ec3c2d4e407dd5d10ae726f5ac3d04b`)
        .then(response=>response.json())
        .then(data => {
          this.setState({ weatherData: data }, ()=>{
        })})
    });
  }

  componentWillMount() {

    const pictureArray = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    this.setState({
      bgStyle: {
        backgroundImage: `url(${selectedPicture})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    })

  }
  // shouldComponentUpdate(nextState) {
  //   return this.state.weatherData !== nextState.weatherData;
  // }

  render () {
    const {weatherData} = this.state;
    return (
      <div className="App" style={this.state.bgStyle}>
        <Body onInputChange={this.onInputChange} onSubmit={this.onSubmit} weatherData={weatherData}/>
      </div>
    );
  }
}

export default App;
