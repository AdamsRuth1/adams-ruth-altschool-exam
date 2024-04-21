import RepoList from './pages/RepoList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleRepo from './pages/SingleRepo';
import FourOhFour from './pages/404';
import "./custom.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RepoList />} />
      <Route  path="/repos/:repoName" element={<SingleRepo />} />
      <Route path="/404" element={<FourOhFour />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
