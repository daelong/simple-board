import logo from './logo.svg';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import PostWritePage from './pages/PostWritePage';

function App() {
  return (
    <>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/@:username/:postId" component={PostPage} />
      <Route path={['/@:username', '/']} component={PostListPage} exact />
      <Route path="/write" component={PostWritePage} />
    </>
  );
}

export default App;
