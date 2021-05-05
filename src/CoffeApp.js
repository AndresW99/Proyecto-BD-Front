import { Provider } from 'react-redux'
import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';


const CoffeApp = () => {
    return (
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    );
  }
  
  export default CoffeApp;