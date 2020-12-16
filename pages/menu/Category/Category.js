import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import ImageOverlay from "react-native-image-overlay";
import { Actions } from "react-native-router-flux";
import styles from './StyleSheet';
export default Category = (props) => {
    return (
        <TouchableOpacity
            onPress={() => { Actions.categoryPage({categoryIndex: props.categoryIndex}) }}
            activeOpacity={0.5}
            style={styles.container}>
            <ImageOverlay source={props.categoryThumbnail}
                height={140} rounded={10}
                containerStyle={styles.card}>
                <Text h4 style={styles.title}>{props.categoryName}</Text>
            </ImageOverlay>
        </TouchableOpacity>
    )
}