import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/blog" Component={Blog} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
