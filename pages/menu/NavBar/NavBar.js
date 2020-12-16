import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Header } from 'react-native-elements'

const NavBar = () => {

    styles = StyleSheet.create({
        settings: {
            width: 30,
            height: 30
        }
    })

    settingsButton = () => {
        return (
            <TouchableOpacity onPress={() => {}}>
                <Image style={styles.settings} source={require('../../../assets/icons/info.png')}/>
            </TouchableOpacity>
        )
    }

    return (
        <Header
            backgroundColor="#42613F"
            centerComponent={{ text: 'صفحه اصلی', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={settingsButton}
        />
    )
}

export default NavBar
