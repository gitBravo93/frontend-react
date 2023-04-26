import logo from './Img.jpg';
import './App.css';

//importamos los componentes
import CompListBlogs from './blog/ListBlogs';
import CompShowIdBlog from './blog/ShowIdBlog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CompEliminarBlog from './blog/EliminarBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App w-100">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompListBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/show/:id' element={ <CompShowIdBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
            <Route path='/eliminar/:id' element={ <CompEliminarBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
