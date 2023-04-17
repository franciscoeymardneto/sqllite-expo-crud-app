import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTextInput from "../../pages/components/HeaderTextInput";

// import { Container } from './styles';
type SearchHeaderProps = {
    title: string
    navigation: any
    searchPetsByName: (name: string) => void
}
const SearchHeader: React.FC<SearchHeaderProps> = (props) => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('')
    const [showSearchBar, setShowSearchBar] = useState(false)

    return (
        <SafeAreaView style={style.container}>
            <View
                testID="lhc-container"
                style={{
                    width: "100%",
                    flexDirection: "row",
                    display: showSearchBar ? 'none' : 'flex'
                }}
            >
                <TouchableOpacity
                    testID="lhc-goBack"
                    style={style.icon}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name={"arrow-left"} size={27} />
                </TouchableOpacity>
                <View style={style.labelContainer}>
                    <Text style={style.label}>{props.title}</Text>
                </View>

                <TouchableOpacity
                    testID="lhc-goBack"
                    style={{ ...style.icon, alignSelf: "stretch" }}
                    onPress={() => setShowSearchBar(true)}
                >
                    <Icon name={"magnify"} size={27} />
                </TouchableOpacity>
                <TouchableOpacity
                    testID="lhc-goBack"
                    style={{ ...style.icon, alignSelf: "stretch" }}
                    onPress={() => navigation.navigate('FormScreen' as never, {
                        mode: 'new'
                    } as never)}
                >
                    <Icon name={"plus"} size={27} />
                </TouchableOpacity>

            </View>

            <HeaderTextInput
                value={search}
                onTextChange={(value) => {
                    setSearch(value)
                    props.searchPetsByName(value)
                }}
                show={showSearchBar}
                setShow={setShowSearchBar}
            />

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        // backgroundColor: globalColors.lighter,
        zIndex: -1,
        width: "100%",
        // paddingTop: Platform.OS === 'ios' ? 0 :  Constants.statusBarHeight * -1
    },
    icon: {
        padding: 15,
        color: 'black',
        borderRadius: 100
    },
    labelContainer: {
        padding: 15,
        flex: 1,
        // backgroundColor: 'green',
    },
    label: {
        fontSize: 20,
        textAlign: "left",
    },
});

export default SearchHeader;
