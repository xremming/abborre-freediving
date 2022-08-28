import type { NextPage } from "next";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 3rem;
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const Home: NextPage = () => {
  return (
    <Header>
      <Title>Abborre Freediving</Title>
      <Nav>
        <a
          style={{ color: "green", fontWeight: 900, textShadow: "0 0 2 white" }}
          href="/"
        >
          Etusivu
        </a>
        <a
          style={{ color: "green", fontWeight: 900, textShadow: "0 0 2 white" }}
          href="/"
        >
          Liity Jäseneksi
        </a>
        <a
          style={{ color: "green", fontWeight: 900, textShadow: "0 0 2 white" }}
          href="/"
        >
          Discord
        </a>
      </Nav>
    </Header>
  );
};

export default Home;
