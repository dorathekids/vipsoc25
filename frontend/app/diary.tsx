import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiaryScreen() {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    // Logic to save the diary entry (e.g., to AsyncStorage, a database, or an API)
    console.log('Diary Entry Saved:', entry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DD/MM/YY</Text>
      <TextInput
        style={styles.input}
        placeholder="Start writing your thoughts..."
        placeholderTextColor="#888"
        multiline
        value={entry}
        onChangeText={setEntry}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.smileText}>What makes you smile today?</Text>
        {/* Chat bubble-like style for AIry */}
        <View style={styles.aiBubble}>
          <Text style={styles.aiText}>AIry</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9e8ec',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
   // flex: 1,
    backgroundColor: '#F5F5F5',
    color: '#000',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    textAlignVertical: 'top',
    height: 100,
  },
  rowContainer: {
    flexDirection: 'row', // Aligns the "What makes you smile" text and bubble on the same line
    justifyContent: 'flex-end', // Aligns both to the right
    alignItems: 'center', // Aligns items vertically centered
    marginTop: 20,
    marginBottom: 10,
  },
  smileText: {
    color: '#000',
    fontSize: 18,
    marginRight: 10, // Adds space between the text and bubble
  },
  aiBubble: {
    backgroundColor: '#F0DD8F', // Background color of the bubble
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20, // Corner radius to make it rounded
  },
  aiText: {
    color: '#000', // Text color inside the bubble
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#83b5bd',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
