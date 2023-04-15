import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

type FormScreenProps = {
    route: RouteProp<ParamListBase>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

type FormScreenHeaderActionsProps = {
    mode: 'new' | 'edit'
}

const FormScreenHeaderActions: React.FC<FormScreenHeaderActionsProps> = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <View style={{marginHorizontal: 5, display: props.mode === 'edit' ? 'flex' : 'none'}}>
                <Button title='Deletar' color='red' onPress={() => console.log('del')}/>
            </View>
            <View style={{marginHorizontal: 5}}>
                <Button title='Salvar' onPress={() => console.log('salvar')}/>
            </View>
        </View>
    )
}

const FormScreen: React.FC<FormScreenProps> = ({route, navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <FormScreenHeaderActions mode={(route.params as any).mode || 'new'}/>
        })
    }, [navigation])

    return (
        <View>
            <Text>Olá Form</Text>
        </View>
    )
}

export default FormScreen