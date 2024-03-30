import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    app:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:20,
        borderWidth:0.5,
        borderColor:'#adadad',
        borderRadius:10,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    text:{
        color:'#333',
        fontWeight:'600',
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