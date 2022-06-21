import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const getIconFont = (type) => {
    switch (type) {
        case 'material':
            return MaterialIcons;
        case 'ant':
            return AntDesign;
        case 'feather':
            return Feather;
        case 'material-icon':
            return MaterialIcon;
        case 'material-community':
            return MaterialCommunity;
        case 'evil':
            return EvilIcon;
        case 'entypo':
            return Entypo;
        case 'ionicons':
            return Ionicons;
        case 'foundation':
            return Foundation;
        case 'font-awesome':
            return FontAwesome;
        
    }

}

const Icon = ({type, ...props}) => {
    const FontIcon = getIconFont(type);
    
    return (
        <FontIcon {...props} />
    )
}

export default Icon;
