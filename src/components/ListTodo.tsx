import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../Types';



type ListTodoProps = {
  todoList: Todo[];
  onToggle: (id: number) => void;
};

const ListTodo = ({ todoList,onToggle }:ListTodoProps) => {
  const count = todoList.filter(todo => !todo.completed).length;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Yapılacaklar</Text>
        <Text style={styles.headerTxt}>{count}</Text>
      </View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem item={item} onToggle={onToggle}  />}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};
/**
 * Show the count of todos where completed === false
 */

export default ListTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  list: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
