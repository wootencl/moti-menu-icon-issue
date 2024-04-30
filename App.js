import { useReducer } from "react";
import { Pressable, StyleSheet } from "react-native";
import XMenu from "./Xmenu";

export default function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <XMenu size={200} color="white" mode={visible ? 'menu' : 'x'} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});