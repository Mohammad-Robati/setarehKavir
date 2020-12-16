import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import NavBar from '../NavBar/NavBar'
import Item from '../Item/Item'
import dataSet from '../../../seed'

const Main = (props) => {
    const category = dataSet[props.navigation.state.params.categoryIndex];
    return (
        <View>
            <NavBar categoryName={category.name}/>
            <ScrollView>
                {
                    category.items.map((item, idx) => 
                        <Item key={idx} details={item} />
                    )
                }
            </ScrollView>
        </View>
    )
}

export default Main
