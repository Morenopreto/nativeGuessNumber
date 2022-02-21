import { StyleSheet } from "react-native";
const colors ={
  principalColor:'#5A6FDB',
  secondaryColor:'black',
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: "80%",
    paddingTop: 30,
  },
  header: {
    width: '100%',
    height: 120,
    paddingTop: 36,
    backgroundColor:colors.principalColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 30,
    margin: "5%",
    borderRadius: 10,
  },
  checkbox: {
    maxWidth: "75%",
  },
  delete: {
    padding: 15,
  },
  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontFamily:'Lato-bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: 50,
  },
  button:{
   backgroundColor:'red',
   color:'#000',
   padding:10,
   fontFamily:'Lato'
  },
  outlined:{
    borderColor:colors.principalColor,
    borderRadius: 20,
    backgroundColor: 'transparent',
    textAlign:'center',
    borderWidth: 1,
    paddingBottom:7,
    paddingTop:7,
    paddingLeft:11,
    paddingRight:11,
  },
  filled:{
    borderColor:colors.principalColor,
    color:'#f44336',
    borderRadius: 20,
    backgroundColor: colors.principalColor,
    textAlign:'center',
    borderWidth: 1,
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
    marginRight:'20%',
    marginLeft:'20%',
    marginBottom:20,
    width:'60%',
  }
});

export default style;
