import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';


const goalTrackerOptions = ["I heard you mentioned about doing more sports!! How about... ice skating tomorrow?", "Read a book", "You got a Archery certification last December! How about refreshing your skill and feel more sporty~"];
const activistSuggestions = ["Donate to charity", "Join a local cleanup", "How’s your crocheting going? I remembered last time you said you were crocheting a cow for your best friend!"];

const getRandomItem = (array: string[]) => array[Math.floor(Math.random() * array.length)];

const GoalTrackerActivist: React.FC = () => {
  const [goal, setGoal] = useState<string>(getRandomItem(goalTrackerOptions));
  const [activistSuggestion, setActivistSuggestion] = useState<string>(getRandomItem(activistSuggestions));

  useEffect(() => {
    setGoal(getRandomItem(goalTrackerOptions));
    setActivistSuggestion(getRandomItem(activistSuggestions));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.section}>
        <Text style={styles.header}>Try it Out</Text>
        <Text style={styles.text}>{goal}</Text>
        <Image source={require('../assets/images/Ice.jpg')} style={styles.image} />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.header}>Activist Suggestion</Text>
        <Text style={styles.text}>{activistSuggestion}</Text>
        <Image source={require('../assets/images/Crochet.webp')} style={styles.image2} />
      </View>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // Allows scrolling beyond screen height
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#b9e8ec',
      },
  section: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#83B5BD',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 10,
  },
  image2: {
    textAlign: 'left',
    width: 300,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default GoalTrackerActivist;
