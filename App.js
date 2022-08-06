import './App.css';
import {Home} from './home/home';
import {AddCities} from './cities/add';
import { BrowserRouter as Router , useRoutes, Link} from "react-router-dom";

const Routes = ()=>{
  let routes =useRoutes([
    { path : "/" , element:<Home/>},
    { path : "add" , element:<AddCities/>}
  ]);
  return routes;
}

function App() {
  return (
    <div>
      <Router>
        <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/add'>Add Cities</Link>
           </li>
        </ul>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
