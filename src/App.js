
import './App.css';
import Forminput from './components/Forminput';
import Header from './components/Header';
import Search from './components/Search';
import Transaction from './components/Transaction';

function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <Forminput/>
     <Transaction/>
    </div>
  );
}

export default App;
