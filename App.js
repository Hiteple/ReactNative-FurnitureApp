import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// Screens
import {Home, ItemDetail} from './screens/';

const theme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      border: 'transparent'
   }
};

const Stack = createStackNavigator();

// App
const App = () => {
   return (
      <NavigationContainer theme={theme}>
         <Stack.Navigator
            screenOptions={{
               headerShown: false
            }}
            initialRouteName={'Home'}
         >
            <Stack.Screen
               name='Home' component={Home}
            />
            <Stack.Screen
               name='ItemDetail' component={ItemDetail}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default () => {
   return <App />;
}