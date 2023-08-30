import React, { useState } from 'react'; 
import { View, StyleSheet } from 'react-native'; 

const Box = (props) => {
  const [state, setState] = useState("teste");

  const boxStyle = {
    height: props.size,
    width: props.size,
    backgroundColor: props.color
  }

  return <View style={boxStyle}></View>; 
};

export default Box;