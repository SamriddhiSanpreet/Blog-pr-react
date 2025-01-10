import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Pages/Form';
import ViewBlog from './Pages/viewBlog';
import Header from './Components/Header';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/view" element={<ViewBlog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
