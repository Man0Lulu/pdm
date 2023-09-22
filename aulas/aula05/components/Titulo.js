import { Text } from 'react-native';
const Titulo = (props) =>{
  return(
    <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom:16,
      }}>
      {props.children}
    </Text>
  );
};
export default Titulo;