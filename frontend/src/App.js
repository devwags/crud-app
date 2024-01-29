import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorInventory from "./components/VisitorInventory/VisitorInventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<VisitorInventory />}/>
          <Route path='/item/:id' element={<ItemDetails />}/>
          <Route path='/manager/:id' element='Hello Manager'/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
