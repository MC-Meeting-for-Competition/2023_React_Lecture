// 전역적으로 적용되는 스타일을 만들기 위해
import { createGlobalStyle } from "styled-components";
// SPA UI를 구현하는데 도움을 주기 때문에 페이징에 도움을 주는 모듈 임포트
import { Routes, Route, BrowserRouter } from "react-router-dom";

// 컴포넌트
import Header from "./components/Header";
// 페이지
import Home from "./pages/Home";

// 글로벌 스타일 시트 만들기
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  // fragment ( <> </> ) : 리액트 컴포넌트에 DOM 노드를 추가하지 않고 여러 가지 요소들을 더할 수 있게 해주는 구문
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
