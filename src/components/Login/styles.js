import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
    logoImage:{
        height: 150, 
        width: 150,
        alignSelf : 'center',
        marginTop: 70
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500'
    },
    subTitle:{
        fontSize: 22,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500'
    },
    form:{
        paddingTop: 20
    },
    createSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    linkBtn:{
        paddingLeft: 10,
        color: colors.primary,
        fontSize: 16,
    },
    infoText:{
        fontSize: 16,
    }
})