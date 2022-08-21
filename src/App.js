import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';

function App() {
  return (
     <BrowserRouter>
     <Header />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      <Footer />  
      </BrowserRouter>
  );
}

export default App;