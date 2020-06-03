import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';


import { THEME } from '../theme'
import AppTextBold from './UI/AppTextBold'


const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <AntDesign name="back" size={24} color="white" />
            <AppTextBold style={styles.title}>{title}</AppTextBold>
            <FontAwesome5 name="edit" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: THEME.NAVBAR_COLOR,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
});

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar