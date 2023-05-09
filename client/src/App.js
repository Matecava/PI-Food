import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import CreateRecipe from './components/CreateRecipe'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/recipe/:idRecipe' element={<RecipeDetails/>}/>
      <Route path='/recipecreate' element={<CreateRecipe/>}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
