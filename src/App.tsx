import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
