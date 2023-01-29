import './App.css';
import Landing from "./views/landing/Landing"
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import NavBar from './components/navBar/NavBar';
import Form from './views/form/Form';

import { Route, useLocation} from "react-router-dom";

function App() {
const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" &&  <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route  path="/home" render={() => <Home />} />
      <Route  path="/detalle/:id" component={Detail} />
      <Route  path="/create" component={Form} />
    </div>
  );
}

export default App;
