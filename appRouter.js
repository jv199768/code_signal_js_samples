import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './UserPage';
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/users/:id/*" element={<UserPage />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="posts" element={<UserPosts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
