import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    logoImage:{
        height: 150, 
        width: 150,
        alignSelf : 'center',
        marginTop: 70
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText:{
        fontSize: 16,
        paddingVertical: 10,
        paddingLeft: 20
    }
})