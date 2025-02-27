import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Section 1 */}
      <View style={[styles.section, { backgroundColor: '#B9E8EC' }]}>
        <View style={styles.section1TextContainer}>
          <View style={styles.ballsContainer}>
            <View style={[styles.ball, { backgroundColor: '#D88282', top: -40, left: 20, width: 80, height: 80 }]} />
            <View style={[styles.ball, { backgroundColor: '#F0DDBF', bottom: -10, left: 50, width: 100, height: 100 }]} />  {/* Adjusted the position of the yellow ball */}
            <View style={[styles.ball, { backgroundColor: '#83B5BD', bottom: -30, left: 20, width: 100, height: 100 }]} />
          </View>
          <Text style={styles.mainText}>Hi username! Nice to meet you.</Text>
        </View>
        <Image source={require('../assets/images/HomeGroup1.png')} style={styles.imageRight} />
      </View>

      {/* Section 2 */}
      <View style={[styles.section, styles.sectionSmaller, { backgroundColor: '#FDFCE6' }]}>
        <Image source={require('../assets/images/icon.png')} style={styles.imageLeft} />
        <View style={styles.section2TextContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#D88282', paddingVertical: 6, paddingHorizontal: 12 }]}>
            <Text style={styles.buttonText}>Write Diary</Text>
          </TouchableOpacity>
          <Text style={styles.introText}>
            AI generated prompt
            {"\n"}
            AI activities suggestions
            {"\n"}
            Discover yourself.
          </Text>
        </View>
      </View>

      {/* Section 3 */}
      <View style={[styles.section, { backgroundColor: '#B9E8EC' }]}>
        <View style={styles.section3TextContainer}>
          <Text style={styles.mainText}>Mental Health Analysis</Text>
        </View>
        <Image source={require('../assets/images/HomeGroup3.png')} style={styles.imageRight} />
      </View>

      {/* Section 4 */}
      <View style={[styles.section, styles.sectionSmaller, { backgroundColor: '#FDFCE6' }]}>
        <Image source={require('../assets/images/HomeGroup4.png')} style={styles.imageLeft} />
        <View style={styles.section4TextContainer}>
          <Text style={styles.mainText}>Your Best Friend!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9E8EC', // Set background color of whole homepage
    paddingTop: 20,
    paddingBottom: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    marginVertical: 10,
    paddingHorizontal: 20,  // Add padding to keep items away from edges
    borderRadius: 10, // Optional: Make sections have rounded corners
    position: 'relative', // Allow the balls to be placed relative to the section container
  },
  sectionSmaller: {
    marginHorizontal: 30,
  },
  imageLeft: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 20,
  },
  imageRight: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  section1TextContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative', // Allow the balls to overlap the text
  },
  section2TextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  section3TextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  section4TextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ballsContainer: {
    position: 'absolute', // Balls should overlap with each other and be behind the text
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Balls should be in the background
  },
  ball: {
    borderRadius: 50,
    position: 'absolute',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    zIndex: 1, // Ensure text appears above the balls
    marginTop: 40, // Adjust to avoid text overlapping with balls
  },
  introText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    paddingVertical: 6, // Make the button smaller by reducing padding
    paddingHorizontal: 12, // Make the button smaller by reducing padding
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
