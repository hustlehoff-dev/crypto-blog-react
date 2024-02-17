import BlogContent from "./BlogContent";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/blog/:id" element={<BlogContent />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
