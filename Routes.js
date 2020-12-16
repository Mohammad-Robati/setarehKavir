import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Menu from './pages/menu/Main/Main'
import ARNavigator from './pages/ar/ARNavigator'
import CategoryMain from './pages/category/Main/Main'

const Routes = () => (
   <Router >
      <Scene key="root">
         <Scene key="menu" component={Menu} initial={true} hideNavBar/>
         <Scene key="categoryPage" component={CategoryMain} hideNavBar/>
         <Scene 
         key = "arScene" 
         component = {ARNavigator}
         navBarButtonColor = "white"
         navigationBarStyle = {{backgroundColor: "#42613F"}}
         titleStyle = {{color: "white", textAlign: 'center'}}
         />
      </Scene>
   </Router>
)
export default Routes