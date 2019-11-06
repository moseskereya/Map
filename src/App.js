import React from 'react'
import "./App.css"
import Map1 from "./Components/Map"
const App = () => {
    return (
        <div className="App">
            <Map1/>
        </div>
    )
}

export default App































// import React, { Component } from 'react';
// import "./App.css"
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             name:"Moses"
//          } 
//          this.ChangeName = this.ChangeName.bind(this)
//     }

//     ChangeName(e){
//         this.setState({
//             name:e.target.value
//         })
//     }
//     render() { 
//         return ( 
//             <div className="App">
//                 <input value={this.state.name} 
//                 onChange={this.ChangeName}/>
//             </div>
//          );
//     }
// }
 
// export default App;



