import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    app:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        borderWidth:0.5,
        borderColor:'#adadad',
        boxShadow:'0px 0px 5px 0 rgba(0,0,0,0.05)',
        borderRadius:10,
    },
    imgContainer:{
        width:20,
        aspectRatio:1,
        borderWidth:0.5,
        borderColor:'#adadad',
        boxShadow:'0px 0px 5px 0 rgba(0,0,0,0.05)',
        borderRadius:99,
    },
    img:{
        width:'100%',
        height:'100%',
        aspectRatio:1
    }
})
export {s};