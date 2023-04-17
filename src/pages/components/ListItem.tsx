import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Pet } from '../../model/Pet';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
const ListItem: React.FC<Pet> = (props) => {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity 
                style={styles.tableRow}
                onPress={() => navigation.navigate('FormScreen' as never, {
                    mode: 'edit',
                    pet: props
                } as never)}
            >
                <View style={[styles.tableCell, styles.firstCell]}>
                    <Text style={styles.tableCellText}>{props.name}</Text>
                </View>
                <View style={styles.tableCell}>
                    <Text style={styles.tableCellText}>{props.age}</Text>
                </View>
                <View style={styles.tableCell}>
                    <Text style={styles.tableCellText}>{props.specie}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    tableCell: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstCell: {
        flex: 1,
    },
    tableCellText: {
        fontSize: 16,
        textAlign: 'center',
    },
});
export default ListItem;