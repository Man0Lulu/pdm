import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoGaveta from './routes/NavegacaoGaveta';

const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoGaveta />
    </NavigationContainer>
  );
};

export default App;