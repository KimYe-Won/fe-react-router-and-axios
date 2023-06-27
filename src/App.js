import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WelcomePage from "./pages/WelcomePage";
import OwnerId from "./pages/OwnerId";
import Create from "./pages/Create";
import ArticledId from "./pages/ArticleId";
import Edit from "./pages/ArticleEdit";
import NotFound from "./pages/NotFound";
// 아래는 React Router 예시입니다.
// 예시 Route 3가지는 지우고 시작해주세요!

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<OwnerId />} />
        <Route path="/:ownerId/create" element={<Create />} />
        <Route path="/articles/:articleId" element={<ArticledId />} />
        <Route path="/articles/:articleId/edit" element={<Edit />} />
        {/* <Route path="/hello" element={<>Hello, World!</>} /> */}
        {/* <Route path="/welcome/:name" element={<WelcomePage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
