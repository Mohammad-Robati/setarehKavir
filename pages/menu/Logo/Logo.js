import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-elements';

const Logo = () => {

    styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, 
        image: {
            margin: 30
        }
    })

    return (
        <Card>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../rugs/logo.png')} />
                <Text h5>نقش خاطره می زند، فرش ستاره کویر یزد</Text>
            </View>
        </Card>
    )
}

export default Logo
