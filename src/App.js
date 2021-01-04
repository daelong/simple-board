import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import PostWritePage from './pages/PostWritePage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/@:username/:postId" component={PostPage} />
      <Route path={['/@:username', '/']} component={PostListPage} exact />
      {/* <Route path="/@:username" component={PostListPage} exact /> */}
      <Route path="/write" component={PostWritePage} />
      {/* <Route path="/" component={Home} /> */}
    </>
  );
}

export default App;
