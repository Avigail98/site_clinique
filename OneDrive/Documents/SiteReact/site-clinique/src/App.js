import './App.css';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Chambres from './Components/Chambres';
import { Helmet } from 'react-helmet';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div>
    <Helmet>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

    </Helmet>
    <Router>
    <div className="App">
<Navbar/>
 <main>
<Routes>
    <Route exact path='/' element={ <HomePage/>}>
    
     </Route>

     <Route path='/presentation' element={<Presentation/> }>

   </Route>
<Route path='/chambres' element={<Chambres/>}></Route>
   <Route path='/contact' element={<Contact/> }>
 
   </Route>
     </Routes>
     </main>

    </div>
    </Router>
    <MyFooter/>
    </div>
  );
}

export default App;
