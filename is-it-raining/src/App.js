
import React from 'react';
import './App.css';
import IsRaining from './isRaining';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isRain : false
    }
    this.checkRain();
  }

 

  checkRain = () => {

    const interval = setInterval(()=>{
      fetch('https://api.openweathermap.org/data/2.5/weather?appid=21034f612df49ec3d09e45d6aac14a8b&q=faridabad')
      .then(res => res.json())
      .then((result)=>{
          if(result.weather[0].description!=='Rain' || result.weather[0].description==='rain'){
          this.setState({
            isRain : true
          })
      }
      
      // console.log(result.weather[0].description);
      },(error) =>{
        this.setState({
          isRain : false
        })
      })
    }, 1000);
    
  }

  render () {
    return (
      <IsRaining 
      isRain={this.state.isRain}
      />
    );
  }
  
}

export default App;
