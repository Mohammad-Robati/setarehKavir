import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Category from '../Category/Category';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar'
import styles from './StyleSheet'
import dataSet from '../../../seed';
const Menu = () => {
    return (
        <View>
            <NavBar/>
            <ScrollView>
                <Logo />
                <View style={styles.header}>
                    <Text style={styles.text}>کلکسیون ها</Text>
                    <Divider style={styles.divider} />
                </View>
                {
                    dataSet.map((category, idx) => 
                        <Category 
                        key={idx}
                        categoryIndex={idx} 
                        categoryName={category.name} 
                        categoryThumbnail={category.thumbnail} />
                    )
                }
            </ScrollView>
        </View>
    )
}


export default Menu
