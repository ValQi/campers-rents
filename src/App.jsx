import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { getAllCampers } from './redux/selectorsRedux/actions';

const Catalog = lazy(() => import('./pages/catalog/Catalog'));
const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

function App() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites); 

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="favorites" element={<Favorites favorites={favorites} />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:camperId" element={<Catalog />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={< Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
