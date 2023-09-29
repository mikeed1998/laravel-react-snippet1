import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Createpost from './pages/Createpost';

function App() {
  return (
    <div>
      <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className='navbar-brand' to="/">React Laravel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className='nav-link' aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-post">Create Post</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create-post' element={ <Createpost /> } />
        </Routes>
      </>
    </div>
  );
}

export default App;
