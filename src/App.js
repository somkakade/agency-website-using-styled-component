import styled, { css } from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import '../src/style.css'
import Services from "./components/Service/Services";

// import Container from "./components/Feature/Feature.jsx"

const Container = styled.div`
height: 100vh;
/* background-color: #000; */
position: relative;

`;

const ContainerFeature = styled.div`
position: relative;
`
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const HeroBannerShape = styled.div`
  ${Shape}
  clip-path: polygon(62% 0, 100% 0, 100% 100%, 41% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 69% 0, 38% 100%, 0% 100%);
  background-color: pink;
`;
const ServicesShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 29% 100%, 0% 100%);
  background-color:#f88497;
`;


function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <HeroBannerShape />

      </Container>

      <ContainerFeature>
        <FeatureShape />
        <Feature />
      </ContainerFeature>

      <ContainerFeature>
        <Services />
        <ServicesShape/>
      </ContainerFeature>
    </>
  );
}

export default App;
