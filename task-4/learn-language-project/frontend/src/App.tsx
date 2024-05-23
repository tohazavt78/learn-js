import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Words from "./Words";
import Dictionary from "./Dictionary";
import Quiz from "./Quiz";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #4256d0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  margin: 25px 40px;
  font-size: 20px;
  font-weight: 400;
  width: 190px;
  text-align: center;
  text-decoration: none; 
  }
`;

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header>
          <StyledLink to="/words">Добавление слова</StyledLink>
          <StyledLink to="/dictionary">Словарь</StyledLink>
          <StyledLink to="/quiz">Квиз</StyledLink>
        </Header>
        <Routes>
          <Route path="/words" element={<Words />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;
