import styled from 'styled-components';
import { Link } from '@reach/router';



function Home(props) {

  const MainGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 35vh);
  padding: 20px;
  margin-top: 4%;
  margin-left: 6%;
  margin-right: 6%;
`;
const MainButtons = styled.div`
display: flex;
justify-content: center;
padding: 5px;
height: 5vh;
`;
const Title = styled.h1`
text-align: center
`;


  return (
    <div className="App">
      <Title>BrewDog</Title>
      <MainButtons>
        <nav>
          <Link to={'/beers'} key={'beers'}>
          {'Choose Beers'}
          </Link>
          </nav>
        <button>Clear</button>
        </MainButtons>
      <MainGrid>
        <button>beer</button>
        <button>beer</button>
        <button>Beer</button>
        <button>Beer</button>
        <button>Beer</button>
        <button>Beer</button>
      </MainGrid>
    </div>

  );


}

export default Home;