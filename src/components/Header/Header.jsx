import { Container } from '../../assets/styles/GlobalStyled';
import { Field, Ul, Link, Li } from './Header.styled';

export const Header = () => {
return (
<Field>
  <Container>
    <nav>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/catalog">Catalog</Link>
        </Li>
        <Li>
          <Link to="/favorites">Favorites</Link>
        </Li>
      </Ul>
    </nav>
  </Container>
</Field>
  );
};