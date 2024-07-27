import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PostsGrid from "./components/postsList/PostsGrid";
import PostById from "./components/singlePostView/PostById";
import CreatePost from "./components/createNewPost/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsGrid />} />
        <Route path="/posts/:id" element={<PostById />} />
        <Route path="posts/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
