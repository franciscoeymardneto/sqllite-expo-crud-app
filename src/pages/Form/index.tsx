import { NavigationProp, ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
type FormScreenProps = {
    route: RouteProp<ParamListBase>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}
const FormScreen: React.FC<FormScreenProps> = ({route, navigation}) => {

    useEffect(() => {
        console.log(route.params)
    }, [navigation])
    return (
        <View>
            <Text>Olá Form</Text>
        </View>
    )
}

export default FormScreen;