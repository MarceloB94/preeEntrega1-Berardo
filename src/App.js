import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting= {'Bienvenidos'}/>
<NavBar/>

    </div>   
  )
}

export default App;
