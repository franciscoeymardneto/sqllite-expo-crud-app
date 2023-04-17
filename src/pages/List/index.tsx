import { NavigationProp, ParamListBase, RouteProp, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { petFactory } from '../../factory';
import { Pet } from '../../model/Pet';
import { WithId } from '../../controller/interfaces';
import { useIsFocused } from "@react-navigation/native"; 
import ListItem from '../components/ListItem';
import SearchHeader from '../../routes/components/SearchHeader';

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
            header: () => (
                <SearchHeader
                    navigation={navigation}
                    searchPetsByName={searchPetsByName}
                    title='Pets'
                />
            )
        })
    }, [navigation])

    async function searchPetsByName(name: string): Promise<void> {
        const response = await petController.searchByName(name)
        setPets(response)   
    }

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