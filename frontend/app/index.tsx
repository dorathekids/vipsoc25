import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to the Home Screen!</Text>
      
      {/* Navigation Links */}
      <View style={styles.linkContainer}>
        <Link href="/about" style={styles.button}>
          <Text style={styles.buttonText}>Go to About Screen</Text>
        </Link>
        <Link href="/diary" style={styles.button}>
          <Text style={styles.buttonText}>Go to Writing</Text>
        </Link>
        <Link href="/aisuggest" style={styles.button}>
          <Text style={styles.buttonText}>Go to Suggestions</Text>
        </Link>
        <Link href="/dashboard" style={styles.button}>
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9E8EC', // Home page background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adding padding to ensure content is not close to the edges
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#25292e',
    marginBottom: 40, // Spacing between header and buttons
  },
  linkContainer: {
    width: '90%', // Make the container width smaller than the screen width
    alignItems: 'center', // Centering the content horizontally
    justifyContent: 'center', // Centering the content vertically
  },
  button: {
    backgroundColor: '#D88282', // Button background color
    borderRadius: 10,
    marginVertical: 10, // Spacing between buttons
    width: '80%', // Button width relative to container
    paddingVertical: 15, // Button height
    alignItems: 'center', // Centering button text
    justifyContent: 'center', // Ensure text is vertically centered
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15, // Adding padding inside the button to avoid text touching the edges
  },
});
