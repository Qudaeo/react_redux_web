import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes from './navigation/AppRoutes';
import {store} from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

export default App;
