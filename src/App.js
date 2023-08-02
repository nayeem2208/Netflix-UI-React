import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/rowPost';
import {original,Action,comedy,documentaries,romance,trending} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPost url={original} title='Netflix Originals'/>
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>


    </div>
  );
}

export default App;
