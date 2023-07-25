import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/rowPost';
import {original,Action} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPost url={original} title='Netflix Originals'/>
      <RowPost url={Action} title='Action' isSmall/>

    </div>
  );
}

export default App;
