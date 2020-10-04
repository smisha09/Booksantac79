
import React, { useEffect, useState } from 'react'; 
import WelcomeScreen from './screens/WelcomeScreen';

  import { createAppContainer,createSwitchNavigator } from 'react-navigation' ;
  import {AppTabNavigator} from './components/AppTabNavigator';
  const switchNav = createSwitchNavigator({ 
    WelcomeScreen: WelcomeScreen,
     bottomTab: AppTabNavigator }); 
  
  export default createAppContainer(switchNav);
