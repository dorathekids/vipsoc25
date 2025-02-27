import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';


const goalTrackerOptions = [
  "I heard you mentioned about doing more sports!! How about... ice skating tomorrow?",
  "You’ve been talking about hiking lately! How about a trail hike this weekend?",
  "How about a tennis match this Saturday? I know you've been wanting to practice your serve!",
  "You’ve been into swimming lately! How about a few laps at the pool tomorrow?",
  "How about a rock climbing session this week? I know you've been thinking about it!",
  "How about a quick jog in the park tomorrow? It’s been a while since your last run!",
  "You’ve been talking about yoga lately – would you like to join a class this Friday?",
  "I heard you love cycling – how about a bike ride around the city tomorrow?",
  "You’ve been saying you want to get back into martial arts – how about signing up for a class?",
  "Would you like to try paddleboarding this weekend? It's a fun way to enjoy the outdoors!",
  "How about a dance class this weekend? It could be a fun way to stay active!",
  "You’ve mentioned you’d like to take up golf – how about hitting the driving range tomorrow?",
  "How about a team basketball game this Friday? It's a great way to get competitive and active!",
  "You said you want to improve your badminton skills – how about a friendly match tomorrow?",
  "How about a kayaking trip this weekend? It’s the perfect mix of adventure and fitness!",
  "You’ve been curious about skating lessons – how about trying roller skating this weekend?",
  "How about a group run this Saturday morning? It’ll be great for fitness and fun!",
  "You’ve been saying you want to try fencing – how about signing up for a beginner's class this month?",
  "How about a Pilates class tomorrow? It’s a great way to improve flexibility and strength!",
  "I know you've wanted to try snowboarding – how about a lesson this winter season?"
];

const activistSuggestions = [
  "Donate to charity",
  "Join a local cleanup event this weekend to help keep our community clean!",
  "How’s your crocheting going? I remembered last time you said you were crocheting a cow for your best friend!",
  "How about volunteering at a local food bank? They always need extra hands to help!",
  "You’ve mentioned you wanted to support sustainable living – how about organizing a clothes swap event?",
  "How about participating in an environmental protest next weekend? It's a great way to make your voice heard!",
  "Join a tree-planting event! It’s a fun and impactful way to help the environment.",
  "How about organizing a donation drive for people in need in your community?",
  "Support a cause by attending a charity event or fundraising gala this month!",
  "You’ve been wanting to raise awareness about mental health – how about hosting an awareness campaign?",
  "Help out at a local animal shelter! They always need volunteers for adoption events and daily care.",
  "How about mentoring at a local youth program? Your experience could make a huge difference!",
  "You’ve talked about supporting refugee communities – how about participating in a donation or drive for them?",
  "How about starting a petition for a cause you care about? It’s an easy way to take action on an issue.",
  "What about organizing an online campaign to raise awareness for a social issue close to your heart?",
  "You’ve been passionate about human rights – how about volunteering with an organization that advocates for them?",
  "Why not try attending a community forum and voice your ideas about improving the local area?",
  "You’ve been talking about advocating for better education – how about tutoring at a local school or community center?",
  "Help out at a local shelter or food pantry – they often need people to help sort donations and serve food!",
  "You’ve been passionate about animal rights – how about getting involved with a local animal rights group?"
];


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
        <Text style={styles.header}>Mission Possible</Text>
        <Text style={styles.text}>{activistSuggestion}</Text>
        <Image source={require('../assets/images/Mission.webp')} style={styles.image2} />
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
