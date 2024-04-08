import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import Blog7 from "./pages/Blog7";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        {/* <Route path="/blog1" Component={Blog} /> */}
        <Route path="/blog2" Component={Blog2} />
        <Route path="/blog3" Component={Blog3} />
        <Route path="/blog4" Component={Blog4} />
        <Route path="/blog5" Component={Blog5} />
        <Route path="/blog6" Component={Blog6} />
        <Route path="/blog7" Component={Blog7} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
