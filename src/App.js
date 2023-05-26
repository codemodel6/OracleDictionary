import styled from "styled-components";
import OracleContents from "./OracleContents";
import OracleAside from "./OracleAside";

const Wrapper = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MainHeader = styled.header`
  width: 70%;
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
  background-color: green;
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
          <div className="headertext">Oracle Functions</div>
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
