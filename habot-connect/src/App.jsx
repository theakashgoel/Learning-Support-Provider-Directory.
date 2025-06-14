import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProviderPage from './pages/ProviderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers/:id" element={<ProviderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
