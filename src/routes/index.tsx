import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListScreen from '../pages/List'
import FormScreen from '../pages/Form'
import { petFactory } from '../factory'

const Stack = createNativeStackNavigator()
const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName='ListScreen'
        >
            <Stack.Screen
                component={ListScreen}
                name='ListScreen'
                options={{
                    title: 'Pets'
                }}
            />
            <Stack.Screen
                component={FormScreen}
                name='FormScreen'
                options={{
                    title: 'Pet'
                }}
            />

        </Stack.Navigator>
    )
}

export default Routes;