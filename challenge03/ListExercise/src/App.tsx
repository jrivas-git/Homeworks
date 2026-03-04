import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Songs from "./pages/songs";
import BrowserHistory from "./pages/browserHistory";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Songs</Link> |{" "}
        <Link to="/history">Browser History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Songs />} />
        <Route path="/history" element={<BrowserHistory />} />
      </Routes>
    </BrowserRouter>
  );
}