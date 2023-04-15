import { NavigationProp, ParamListBase, RouteProp, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { PetController } from '../../controller/PetController';
import { PetSQLiteRepository } from '../../repository/PetSQLiteRepo';
import { petFactory } from '../../factory';
import { Pet } from '../../model/Pet';
import { WithId } from '../../controller/interfaces';

// import { Container } from './styles';
type ListScreenProps = {
    route: RouteProp<ParamListBase>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

const ListScreen: React.FC<ListScreenProps> = ({navigation, route}) => {
    const [pets, setPets] = useState<WithId<Pet>[]>([])
    const petController = petFactory()

    useFocusEffect(() => {
        (async () => {
            const response = await petController.list()
            setPets(response)   
        })()  
    })
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