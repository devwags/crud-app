import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorInventory from "./components/VisitorInventory/VisitorInventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<VisitorInventory />}/>
          <Route path='/item/:id' element={<ItemDetails />}/>
          <Route path='/manager/:id' element='Hello Manager'/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
