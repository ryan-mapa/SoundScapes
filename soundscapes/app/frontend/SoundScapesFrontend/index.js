import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './store/store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent('SoundScapesFrontend', () => Root);
