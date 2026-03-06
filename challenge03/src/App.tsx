import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Songs from "./Pages/Songs";
import BrowserHistory from "./Pages/BrowserHistory";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Songs</Link> | <Link to="/history">Browser History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Songs />} />
        <Route path="/history" element={<BrowserHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;