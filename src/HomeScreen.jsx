import { Image, StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function HomeScreen() {
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
    if(!inputData){
      setMessage('Please enter task!.');
      return;
    }
    setTodos((prev) => [...prev, { key: Date.now().toString(), data: inputData }]);
    setInputData('')
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText style={styles.title} type="title">BlinkSwag</ThemedText>
      <View>
        <TextInput style={styles.input} placeholder='Enter your task' value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <Button title='Add' onPress={addTodo} />
        <Text>{message}</Text>
      </View>
      <View>
        <FlatList data={todos} renderItem={todo => <TouchableOpacity onPress={removeTodo.bind(this, todo.item.key)}><Text style={styles.listItem}>{todo?.item?.data}</Text></TouchableOpacity>} />
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: 390,
    height: 50,
    aspectRatio: 1,
    position: 'absolute',
    bottom: 10,
    // margin:20
  },
  title: {
    marginLeft: 40
  },
  input: {
    borderBlockColor: "#000",
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderBlockColor: "#000",
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%'
  }
});