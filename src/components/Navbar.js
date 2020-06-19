import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { THEME } from '../theme'
import AppTextBold from './UI/AppTextBold'

const Navbar = ({ title, editOpen, idScreen }) => {
    const toggleIcon = () => {
        return idScreen === 1
            ? <FontAwesome5 name="edit" size={25} onPress={() => editOpen(2)} style={styles.icon} />
            : <AntDesign name="back" size={25} onPress={() => editOpen(1)} style={styles.icon} />
    }

    return (
        <View style={styles.navbar}>
            <AppTextBold style={styles.title}>{title}</AppTextBold>
            {toggleIcon()}
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 90,
        backgroundColor: THEME.NAVBAR_COLOR,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'relative'
    },
    title: {
        color: '#fff',
        fontSize: 25,
    },
    icon: {
        position: 'absolute',
        bottom: 15,
        left: 40,
        color: '#fff',
    }
});

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    idScreen: PropTypes.number.isRequired,
    editOpen: PropTypes.func.isRequired,
};

export default Navbar