import { NavigationProp, ParamListBase, RouteProp, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { petFactory } from '../../factory';
import { Pet } from '../../model/Pet';
import { WithId } from '../../controller/interfaces';
import { useIsFocused } from "@react-navigation/native"; 
import ListItem from '../components/ListItem';

// import { Container } from './styles';
type ListScreenProps = {
    route: RouteProp<ParamListBase>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

const ListScreen: React.FC<ListScreenProps> = ({navigation, route}) => {
    const [pets, setPets] = useState<WithId<Pet>[]>([])
    const petController = petFactory()
    const focus = useIsFocused();

    useEffect(() => {
        (async () => {
            const response = await petController.list()
            setPets(response)   
        })()  
    }, [focus])
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
        <FlatList
            data={pets}
            renderItem={({item}) => (
                <ListItem {...item}/>
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default ListScreen;