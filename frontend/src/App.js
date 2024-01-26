import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element='Hello Home'/>
          <Route path='/item/:id' element='Hello Item'/>
          <Route path='/manager/:id' element='Hello Manager'/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
