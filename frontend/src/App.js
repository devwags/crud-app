import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorInventory from "./components/VisitorInventory/VisitorInventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import ManagerInventory from "./components/ManagerInventory/ManagerInventory";
import { useAuth } from "./context/AuthContext";

function App() {
  const {isLoggedIn} = useAuth();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<VisitorInventory />}/>
        <Route path='/item/:id' element={<ItemDetails />}/>
        {isLoggedIn && <Route path='/user/:id/items' element={<ManagerInventory />}/>}
        <Route path='*' element={<div>404: Nothing here!</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
