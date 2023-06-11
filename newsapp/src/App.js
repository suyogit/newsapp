// //import logo from './logo.svg';
// import "./App.css";
// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// //import News from "./components/News";
// //import Newsitem from "./components/NewsItem";
// import News from "./components/News";
// import {
//   BrowserRouter as Router,
 
//   Route,
//   Routes,
  
// } from "react-router-dom";
// //class based component
// export default class App extends Component {
//   render() {
//     //lifecycle method

//     return (
     

//       <div>
//         <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/"><News key="health"  pageSize={6} country="us" category="health"/>
// </Route>
// <Route exact path="/business"><News key="business" pageSize={6} country="us" category="business"/>
// </Route>
// <Route exact path="/entertainment"><News key="entertainment"   pageSize={6} country="us" category="entertainment"/>
// </Route>
// <Route exact path="/general"><News key="general" pageSize={6} country="us" category="general"/>
// </Route>
// <Route exact path="/science"><News key="science" pageSize={6} country="us" category="science"/>
// </Route>
// <Route exact  path="/sports"><News key="sports" pageSize={6} country="us" category="sports"/>
// </Route>
// <Route exact path="/technology"><News  key="technology" pageSize={6} country="us" category="technology"/>
// </Route>
//         </Routes>
//         </Router>
//       </div>
//     );
//   }
// }



//working code
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="health" pageSize={6} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={6} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News key="general" pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
