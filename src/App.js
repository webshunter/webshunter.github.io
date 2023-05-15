import logo from './logo.svg';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/layout';
import Home from './pages/home';
import PageNotFound from './pages/p404';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
