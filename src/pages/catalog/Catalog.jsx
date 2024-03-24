import { CampersList } from '../../components/CampersList/CampersList';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { Container } from '../../assets/styles/GlobalStyled';
import { PageCatalogWrapper } from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <PageCatalogWrapper>
        <div>
          <Location />
          <Filters />
        </div>

        <CampersList />
      </PageCatalogWrapper>
    </Container>
  );
};

export default Catalog;