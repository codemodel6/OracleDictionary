import styled from "styled-components";
import OracleContents from "./OracleContents";
import OracleAside from "./OracleAside";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
`;
const MainHeader = styled.header`
  width: 85%;
  height: 150px;
  background-color: black;
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;

  .headertext {
    color: red;
    font-size: 80px;
    font-weight: 800;
  }
`;

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 150px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <MainHeader>
          <Link to="/">
            <div className="headertext">Oracle Functions</div>
          </Link>
        </MainHeader>
        <MainWrapper>
          <OracleAside />
          <OracleContents />
        </MainWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
