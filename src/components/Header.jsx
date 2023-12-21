import * as S from "../styles/Header.style"; // 스타일이 담겨있는 js 파일 임포트

// 컴포넌트 임포트
import Nav from "./Nav";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>MC 쇼핑몰</S.Logo>
      <div style={{ flex: 1 }} />
      <Nav />
    </S.Header>
  );
};

export default Header;
