import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Homescreen from './homescreen'
import Receive from './receive'
import Donate from './donate'
import Signup from './signup'
import Signin from './signin'


const AppNavigator = createStackNavigator({
    Homescreen,
    Receive,
    Donate,
    Signup,
    Signin,
},
    { initialRouteName: 'Signup' }
);



export default createAppContainer(createSwitchNavigator(
    {
        App: AppNavigator,
    },
    {
        initialRouteName: 'App',
    }
));