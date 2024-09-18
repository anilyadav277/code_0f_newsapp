
import { React, Component } from 'react'
import Newscomp from './Components/Newscomp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress // Set the correct 'progress' value
    });
  }
  render() {
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}

        />
        <Router> {/* Wrap your routes inside Router */}
          <Routes>
            <Route exact path="/"element={<Newscomp setProgress={this.setProgress} key="general" category='general' />} />
            <Route exact path="/business" element={<Newscomp setProgress={this.setProgress} key="business" category='business' />} />
            <Route exact path="/entertainment" element={<Newscomp setProgress={this.setProgress} key="entertainment" category='entertainment' />} />
            <Route exact path="/health" element={<Newscomp setProgress={this.setProgress} key="health" category='health' />} />
            <Route exact path="/science" element={<Newscomp setProgress={this.setProgress} key="science" category='science' />} />
            <Route exact path="/sports" element={<Newscomp setProgress={this.setProgress} key="sports" category='sports' />} />
            <Route exact path="/technology" element={<Newscomp setProgress={this.setProgress} key="technology" category='technology' />} />
          </Routes>
        </Router>
      </>
    )
  }
}

// import { React, Component } from 'react';
// import Newscomp from './Components/Newscomp';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({ progress });
//   }

//   render() {
//     return (
//       <>
//         <LoadingBar
//           color='#f11946'
//           progress={this.state.progress}
//         />
//         <Router> {/* Wrap your routes inside Router */}
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={<Newscomp setProgress={this.setProgress} key="general" category='general' />}
//             />
//             <Route
//               exact
//               path="/business"
//               element={<Newscomp setProgress={this.setProgress} key="business" category='business' />}
//             />
//             <Route
//               exact
//               path="/entertainment"
//               element={<Newscomp setProgress={this.setProgress} key="entertainment" category='entertainment' />}
//             />
//             <Route
//               exact
//               path="/health"
//               element={<Newscomp setProgress={this.setProgress} key="health" category='health' />}
//             />
//             <Route
//               exact
//               path="/science"
//               element={<Newscomp setProgress={this.setProgress} key="science" category='science' />}
//             />
//             <Route
//               exact
//               path="/sports"
//               element={<Newscomp setProgress={this.setProgress} key="sports" category='sports' />}
//             />
//             <Route
//               exact
//               path="/technology"
//               element={<Newscomp setProgress={this.setProgress} key="technology" category='technology' />}
//             />
//           </Routes>
//         </Router>
//       </>
//     );
//   }
// }
