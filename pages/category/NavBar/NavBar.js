import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Header } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

const NavBar = (props) => {

    styles = StyleSheet.create({
        back: {
            width: 20,
            height: 20
        }
    })

    backButton = () => {
        return (
            <TouchableOpacity onPress={() => { Actions.pop() }}>
                <Image style={styles.back} source={require('../../../assets/icons/left-chevron.png')}/>
            </TouchableOpacity>
        )
    }

    return (
        <Header
            backgroundColor="#42613F"
            centerComponent={{ text: props.categoryName, style: { color: '#fff', fontSize: 20 } }}
            leftComponent={backButton}
        />
    )
}

export default NavBar
