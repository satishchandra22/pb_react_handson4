import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './home';
import Student from './student';
import Contact from './contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
