'use strict';
import React, { Component } from 'react';
import {
    ViroARScene,
    ViroARPlaneSelector,
    ViroBox,
    ViroMaterials,
    ViroNode,
} from 'react-viro';
import { Actions } from 'react-native-router-flux'

export default class HelloWorldSceneAR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [0, 0, 0],
            initialRotation: 0,
            rotation: [0, 0, 0],
            initialScale: [1, .01, 1.5],
            scale: [1, .01, 1.5]
        };
        ViroMaterials.createMaterials({
            grid: {
                diffuseTexture: props.sceneNavigator.viroAppProps.image
            },
        });
    }
    
    render() {
        return (
            <ViroARScene>
                <ViroARPlaneSelector>
                    <ViroNode position={[0, -1, 0]}
                        dragType="FixedToWorld"
                        onDrag={(position) => {
                            { this.setState({ position: position }) }
                        }}
                        onPinch={(state, factor) => {
                            if (state === 1) {
                                this.setState({
                                    initialScale: [this.state.scale[0] * factor, .01,
                                    this.state.scale[2] * factor]
                                })
                                return;
                            } else if (state === 2) {
                                this.setState({
                                    scale: [this.state.initialScale[0] * factor, .01,
                                    this.state.initialScale[2] * factor]
                                })
                                return;
                            }
                        }}
                        onRotate={(state, factor) => {
                            if (state === 1) {
                                this.setState({ initialRotation: this.state.rotation[1] })
                                return;
                            } else if (state === 2) {
                                this.setState({ rotation: [0, this.state.initialRotation + factor, 0] })
                                return;
                            }
                        }}
                        rotation={this.state.rotation}
                        position={this.state.position}
                        scale={this.state.scale}
                    >
                        <ViroBox materials={["grid"]} />
                    </ViroNode>
                </ViroARPlaneSelector>
            </ViroARScene>
        );
    }
}

module.exports = HelloWorldSceneAR;