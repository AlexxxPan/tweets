import { Container } from '@mui/material';
import { Description, Btn, Title } from './Home.styled';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Title>Tweets</Title>
      <Description>
       Don't miss what's happening
      </Description>
      <Description>
        Join to us!
        <Btn to="/tweets">Tweets</Btn>
      </Description>
    </Container>
  );
};

export default Home;