import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Todo } from '../Types';

 
interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}
const generateId = () => Date.now() + Math.floor(Math.random() * 1000);
const AddTodo = ({addTodo}: AddTodoProps) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Add a new todo" />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addTodo({ id: generateId(), title: text, completed:false })}
      >
        <Text style={styles.btnTxt}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#36474F',
  },
  input: {
    height: 40,
    borderBottomColor: '#788F9C',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    
    borderRadius: 5,
    color: '#fff',
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#FFA500',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
