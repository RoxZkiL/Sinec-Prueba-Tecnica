import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PostsGrid from "./components/postsList/PostsGrid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
