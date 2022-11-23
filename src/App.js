import './App.css';
import './components/Header';
import Header from './components/Header';
import Footer from './components/Footer';
import ResturantList from './components/ResturantList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewResturant from './components/ViewResturant'


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header/>
        </header>
        <Routes>
          <Route path='/' element={<ResturantList/>}/>
          <Route path='/view-Resturant/:id' element={<ViewResturant/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
