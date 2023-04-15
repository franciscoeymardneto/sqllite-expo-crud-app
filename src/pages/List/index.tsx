import { NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';
type ListScreenProps = {
    navigation: NavigationProp<ReactNavigation.RootParamList>
}
const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button 
                    title='Add' 
                    onPress={() => navigation.navigate('FormScreen' as never, {
                        mode: 'new' 
                    } as never)}
                    color='gray'
                />
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>Olá list</Text>
        </View>
    )
}

export default ListScreen;