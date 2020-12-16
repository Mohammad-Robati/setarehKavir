import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Card } from 'react-native-elements'
import ImageOverlay from 'react-native-image-overlay'
import { Actions } from 'react-native-router-flux'
import styles from './StyleSheet'

export default Item = (props) => {
    const details = props.details;
    return (
        <Card title={details.name} key={0}>
            <View >
                <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.imageContainer} 
                onPress={() => { Actions.arScene({title: details.name, image: details.image}) }}>
                    <ImageOverlay
                        source={details.image}
                        height={140}
                        rounded={10}
                        containerStyle={styles.imageContainer}>
                    </ImageOverlay>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {details.description}
                    </Text>
                </View>
            </View>
        </Card>
    )
}
