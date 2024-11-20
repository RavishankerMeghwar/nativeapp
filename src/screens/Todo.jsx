import { Image, StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Todo() {
  const [inputData, setInputData] = useState('');
  const [message, setMessage] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);
    return () => clearTimeout(timer);
  }, [message]);

  const addTodo = () => {
    if (!inputData) {
      setMessage('Please enter a task.');
      return;
    }
    setTodos((prev) => [...prev, { key: Date.now().toString(), data: inputData }]);
    setInputData('');
    setMessage('Todo added successfully');
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev?.filter(todo => todo.key !== id));
    setMessage('Todo removed successfully');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Welcome!</ThemedText>
        <HelloWave />
      </ThemedView> */}

      <ThemedText style={styles.mainTitle}>BlinkSwag</ThemedText>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your task'
          value={inputData}
          onChangeText={setInputData}
        />
        <Button title='Add Task' onPress={addTodo} color="#4CAF50" />
      </View>

      <Text style={message === 'Todo added successfully' ? styles.successMessage : styles.errorMessage}>{message}</Text>

      <View style={styles.todoListContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => removeTodo(item.key)} style={styles.todoItem}>
              <Text style={styles.todoText}>{item.data}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  todoListContainer: {
    paddingHorizontal: 20,
  },
  todoItem: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  reactLogo: {
    width: 390,
    height: 50,
    aspectRatio: 1,
    position: 'absolute',
    bottom: 10,
  },
});
