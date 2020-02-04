import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title:'DevFinder'
            },
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil do GitHub'
            }
        },
    }, {
       defaultNavigationOptions: {
           headerTintColor: '#FFF',
           headerStyle:{
            backgroundColor: '#003c54'
           },
       }, 
    })
);

export default Routes;