import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import SplashScreen from './SplashScreen';
import Home from './Home'

const MainNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Home: { screen: Home },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);