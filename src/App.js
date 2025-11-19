import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AddScore from './components/AddScore';
import ViewScore from './components/ViewScore';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-score" element={<AddScore />} />
          <Route path="/view-score/:id" element={<ViewScore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
