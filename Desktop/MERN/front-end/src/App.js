import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Allstud from './Component/Allstud';
import Navbar from './Component/Navbar';
import Addstud from './Component/Addstud';
import Editstud from './Component/Editstud';
import Viewstud from './Component/Viewstud';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
          <Route path='/' element={<Allstud />}/>
          <Route path='/addstud' element={<Addstud />}/>
          <Route path='/editstud/:id' element={<Editstud />}/>
          <Route path='/viewstud/:id' element={<Viewstud />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
