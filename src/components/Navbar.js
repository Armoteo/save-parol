import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20

    },
});

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar