import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
      },
    
      header: {
        height: 100,
        backgroundColor: '#B2F2BB',
        marginBottom: 50,
        borderRadius: 10
      },
    
      container:{
        flex: 1,
        padding: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10
      },
      
      section: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35,
        padding: 8,
        borderStyle: 'dotted',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
      },
    
    
      section2: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
        borderStyle: 'dotted',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
      },
    
      box: {
       backgroundColor: '#FFEC99',
       width: '30%',
       height: '100%',
       borderRadius: 10
      },
      
      line: {
        backgroundColor: '#FDC9C9',
        width: '100%',
        height: '25%',
        borderRadius: 10
      },
      
      footer: {
        backgroundColor: '#A5D8FF',
        marginTop: 50,
        height: 100,
        borderRadius: 10
      }
})