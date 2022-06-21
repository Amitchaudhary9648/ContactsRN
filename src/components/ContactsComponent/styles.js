import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
    message:{
        paddingVertical: 100,
        paddingHorizontal: 100
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 100
    },
    imagePlaceholder:{
        width: 45,
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: colors.grey,
    },
    items:{
        flexDirection: 'row',  
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    itemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    name:{
        fontSize: 18,


    },
    phoneNumber:{
        opacity: 0.6,
        fontSize: 14,
        paddingVertical: 5
    },
    floatingActionButton:{
        backgroundColor: colors.primary,
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})