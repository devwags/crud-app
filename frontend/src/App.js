import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorInventory from "./components/VisitorInventory/VisitorInventory";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<VisitorInventory url={`http://172.23.0.3:8080/items`}/>}/>
          <Route path='/item/:id' element='Hello Item'/>
          <Route path='/manager/:id' element='Hello Manager'/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
