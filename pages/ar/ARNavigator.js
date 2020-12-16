import { ViroARSceneNavigator } from 'react-viro';
import InitialARScene from './ARScene'
import React from 'react'


export default ARNavigator = (props) => {
    return (
        <ViroARSceneNavigator apiKey={"97D46D7E-E4DE-4A5B-85CD-2C340BD18E0F"}
            initialScene={{ scene: InitialARScene }} viroAppProps={props} />
    )
}