import HomePage from './components/Pages/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'


const HatsPage = () => {
  return(
    <>
     <h3>HATS PAGE</h3>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
