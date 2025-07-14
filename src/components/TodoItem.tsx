import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { TodoItemProps } from '../Types';

export default function TodoItem({ item, onToggle }: TodoItemProps) {
  return (
    <Pressable
      onLongPress={() => onToggle(item.id)}
      style={[
        styles.container,
        item.completed ? styles.completed : styles.uncompleted,
      ]}
    >
      <Text
        style={[
          styles.title,
          item.completed && styles.completedText,  
        ]}
      >
        {item.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    borderBottomWidth: 1,
  },
  uncompleted: {
    backgroundColor: '#7DA453',
  },
  completed: {
    backgroundColor: '#37474F',
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
});
