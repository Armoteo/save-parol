import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome5 } from '@expo/vector-icons';

const Search = ({ toggleText, value }) => {

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={toggleText}
                value={value}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Введите название сайта...'
            />
            <FontAwesome5 name="search" size={36} color="black" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10

    },
    input: {
        width: '80%',
        padding: 8,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        fontSize: 18
    },
    icon: {
        color: '#3949ab'
    }
});

Search.defaultProps = {
    value: ''
}

Search.propTypes = {
    toggleText: PropTypes.func.isRequired,
    value: PropTypes.string
};
export default Search