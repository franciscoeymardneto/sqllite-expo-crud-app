import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListScreen from '../pages/List';
import FormScreen from '../pages/Form';
// import { Container } from './styles';

const Stack = createNativeStackNavigator()
const Routes: React.FC = () => {
  return (
    <Stack.Navigator
        initialRouteName='ListScreen'
    >
        <Stack.Screen 
            component={ListScreen}
            name='ListScreen'
        />
        <Stack.Screen 
            component={FormScreen}
            name='FormScreen'
        />

    </Stack.Navigator>
  );
}

export default Routes;