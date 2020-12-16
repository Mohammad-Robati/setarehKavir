import React from 'react'
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Text } from 'react-native-elements'
import { ViroARSceneNavigator } from 'react-viro';
import InitialARScene from '../ar/ARScene'
import { Actions } from 'react-native-router-flux'
const venusPic = require('../rugs/venus.jpg')
kimiaPic = require('../rugs/kimia.jpg')
abtinPic = require('../rugs/abtin.jpg')
paradisPic = require('../rugs/paradis.jpg')

const Menu = () => {
    const [rug, setRug] = React.useState(undefined);

    const rugs = [
        { name: 'فرش آبتین', image: abtinPic },
        { name: 'فرش کیمیا', image: kimiaPic },
        { name: 'فرش ونوس', image: venusPic },
        { name: 'فرش پارادیس', image: paradisPic }
    ]
    return (
        <ScrollView>
            <Card>
                <View style={styles.card}>
                    <Text h4> به دکوره خوش آمدید! </Text>
                    <Text style={{ fontSize: 11, marginTop: 10 }}> برای دیدن فرش ها در فضای واقعیت افزوده، بر روی عکس کلیک کنید </Text>
                </View>
            </Card>
            {
                rugs.map((rug, idx) =>
                    <Card title={rug.name} key={idx}>
                        <View style={styles.card}>
                            <TouchableOpacity
                                onPress={() =>
                                    {Actions.arScene(rug)}
                                }
                            >
                                <Image
                                    style={styles.image}
                                    source={rug.image}
                                />
                            </TouchableOpacity>
                        </View>
                    </Card>
                )
            }

        </ScrollView>

    )
}




styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
})

export default Menu
