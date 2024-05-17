import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/common/components/Navbar/index";
import News from "./pages/News";
import Form from "./pages/Form";
import Forum from "./pages/Forum";
import Footer from "../src/common/components/Footer/index";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/form" element={<Form />} />
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Forum />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
