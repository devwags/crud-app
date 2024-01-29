import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorInventory from "./components/VisitorInventory/VisitorInventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import { AuthProvider } from "./context/AuthContext";
import ManagerInventory from "./components/ManagerInventory/ManagerInventory";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<VisitorInventory />}/>
          <Route path='/item/:id' element={<ItemDetails />}/>
          <Route path='/user/:id' element={<ManagerInventory />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
