import React from 'react';
import {  View } from 'react-native';
import { TextInput } from 'react-native-paper';

// import { Container } from './styles';

type HeaderTextInputProps = {
    value: string
    onTextChange: (value: string) => void
    show: boolean,
    setShow: (value: boolean) => void
}
const HeaderTextInput: React.FC<HeaderTextInputProps> = (props) => {

    function handleClearInput() {
        props.onTextChange('')
        props.setShow(false)
    }
    return (
        props.show && <View>
            <TextInput
                left={
                    <TextInput.Icon
                        icon='close'
                        size={27}
                        onPress={handleClearInput}
                    />
                }

                right={
                    <TextInput.Icon
                        icon='magnify'
                        size={27}
                        style={{ opacity: 0.6 }}
                    />
                }

                activeUnderlineColor={'black'}
                selectionColor={'black'}
                placeholder='Digite para buscar'
                placeholderTextColor={'gray'}
                style={{
                    backgroundColor: 'transparent'
                }}
                value={props.value}
                onChangeText={props.onTextChange}
                autoFocus
            />
        </View>
    );
}

export default HeaderTextInput;