import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { petFactory } from '../../factory';
import { Pet } from '../../model/Pet';

type FormScreenProps = {
    route: RouteProp<ParamListBase>
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

type FormScreenHeaderActionsProps = {
    mode: 'new' | 'edit',
    onSave: () => void
    onDelete: () => void
}

const FormScreenHeaderActions: React.FC<FormScreenHeaderActionsProps> = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <View style={{ marginHorizontal: 5, display: props.mode === 'edit' ? 'flex' : 'none' }}>
                <Button title='Deletar' color='red' onPress={() => props.onDelete()} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
                <Button title='Salvar' onPress={() => props.onSave()} />
            </View>
        </View>
    )
}

const FormScreen: React.FC<FormScreenProps> = ({ route, navigation }) => {

    const petController = petFactory()
    const mode = (route.params as any).mode || 'new'
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [species, setSpecies] = useState('');

    const handleNameChange = (text) => setName(text);
    const handleAgeChange = (text) => setAge(text);
    const handleSpeciesChange = (text) => setSpecies(text);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <FormScreenHeaderActions
                    mode={mode}
                    onDelete={() => petController.delete(id)}
                    onSave={() => handleSubmit()}
                />)
        })
    }, [navigation, name, age, species])

    async function handleSubmit() {
        try {
            const params: Pet = {
                name,
                age: Number(age),
                specie: species
            }
            if (mode === 'new') {
                await petController.save(params)
            } else {
                await petController.update({...params, id})
            }

            navigation.goBack()

        } catch (error) {
            Alert.alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={handleNameChange}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={handleAgeChange}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Species</Text>
                <TextInput
                    style={styles.input}
                    value={species}
                    onChangeText={handleSpeciesChange}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default FormScreen