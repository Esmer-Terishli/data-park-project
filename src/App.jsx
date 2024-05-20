import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/common/components/Navbar/index';
import News from './pages/News';
import Forum from './pages/Forum';
import Footer from '../src/common/components/Footer/index';
import Details from './pages/Details';
import useStore from './services/store/authStore';
import Forms from '../src/pages/Form';

function App() {
  const fetchNews = useStore((state) => state.fetchNews);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/" element={<Forum />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
