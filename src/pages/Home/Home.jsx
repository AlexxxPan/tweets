import { Container } from '@mui/material';
import { Description, Btn, Title } from './Home.styled';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Title>Tweets</Title>
      <Description>
        follow people…
      </Description>
      <Description>
        Join to us!
        <Btn to="/tweets">Tweets</Btn>
      </Description>
    </Container>
  );
};

export default Home;