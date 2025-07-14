/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet } from 'react-native';
import ListTodo from './src/components/ListTodo';
 import AddTodo from './src/components/AddTodo';
import { useState } from 'react';
import { Todo } from './src/Types';

function App() {
 
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo:Todo) => {
    setTodoList([...todoList, todo]);
  };
const toggleTodo = (id: number) => {
    setTodoList(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ListTodo todoList={todoList} onToggle={toggleTodo}/>
      <AddTodo addTodo={addTodo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
   },
  
 
});

export default App;
