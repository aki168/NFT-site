import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import FindPage from "./pages/FindPage"

function App() {




  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/finding' element={<FindPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
