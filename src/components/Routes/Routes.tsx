import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../base/routes';
import Login from '../../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Home} element={<div>Hello world!</div>} />
    <Route path={AppRoute.SignUp} element={<Login type={'signup'} />} />
    <Route path={AppRoute.Login} element={<Login type={'login'} />} />
    <Route path={AppRoute.Products} element={<div>products</div>} />
    <Route path={AppRoute.Other} element={<div>404</div>} />
  </Routes>
);

export default AppRoutes;
