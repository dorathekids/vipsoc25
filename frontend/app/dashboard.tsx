import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import { StackedBarChart, BarChart, LineChart } from 'react-native-chart-kit';

// Get screen width for responsive chart
const screenWidth = Dimensions.get('window').width;

const data = {
  moodOverview: [10, 15, 5, 7], // Example data for mood overview
  moodPercentage: [50, 30, 20], // Example percentages for mood
  trend: [30, 40, 10, 20], // Example mood trends
  writingActivities: [200, 300, 150, 500], // Example writing activities (words)
  wordCloud: ['creativity', 'reflection', 'growth', 'emotions', 'happiness'], // Example word cloud
  mentalHealthReport: {
    score: 75,
    report: 'Your mental health is in a good state, but try to engage in more activities for better well-being.',
  },
};

export default function Dashboard() {
  const [view, setView] = useState('month'); // Default view is 'month'

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleFullReport = () => {
    Alert.alert('Full Report', `
      Weekly Mental Health Report (Feb 16 - Feb 23, 2025)
      
      Mood Overview:
      Your mood fluctuated between sadness, frustration, and mild anxiety. Key phrases like “I feel overwhelmed” and “I am so alone” indicate feelings of isolation and emotional strain.
      
      Mental Health Indicators:
      Depression: Signs of low energy and hopelessness were detected.
      Anxiety: Frequent mentions of stress and worry.
      Cognitive Distortions: Negative thinking patterns like catastrophizing and overgeneralization were evident.
      
      Suggestions for Improvement:
      - Mindfulness: Practice 10 minutes of daily mindfulness to reduce stress.
      - Physical Activity: Aim for 30 minutes of exercise to boost mood.
      - Therapy: Consider reaching out to a professional for support.
      - Journaling: Focus on small positive moments in your diary to shift your mindset.
      
      Writing Tip:
      Writing about your feelings, even briefly, can help process emotions. Try expressing gratitude or hope in your next entries. It’s a small step toward emotional healing.
    `);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Section 1: Mood Overview */}
      <View style={styles.section}>
        <StackedBarChart
          data={{
            labels: ['January', 'February', 'March', 'April'], // Months for the x-axis
            legend: ['Happy', 'Neutral', 'Sad', 'Depression'],
            data: [data.moodOverview],
            barColors: ['#83B5BD', '#B9E8EC', '#D88282', '#FDFCE6'],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#F0DDBF', // Set chart background color to section's background color
            backgroundGradientFrom: '#F0DDBF',
            backgroundGradientTo: '#F0DDBF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Using black for labels
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color for label text
            strokeWidth: 2,
          }}
          hideLegend={true}
          style={styles.chart}
        />
      </View>

      {/* Section 2: Mood Percentage and Trends */}
      <View style={[styles.section, styles.sectionBox, { backgroundColor: '#FDFCE6' }]}>
        {/* Mood Percentage BarChart */}
        <BarChart
          data={{
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
              {
                data: data.moodPercentage,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FDFCE6', // Set chart background color to section's background color
            backgroundGradientFrom: '#FDFCE6',
            backgroundGradientTo: '#FDFCE6',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          yAxisLabel="$"
          yAxisSuffix="%"
          style={styles.chart}
        />
        {/* Mood Trend LineChart */}
        <LineChart
          data={{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
              {
                data: data.trend,
                color: () => '#D88282', // Set color of line to red
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FDFCE6', // Set chart background color to section's background color
            backgroundGradientFrom: '#FDFCE6',
            backgroundGradientTo: '#FDFCE6',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>

      {/* Section 3: Writing Activities Area Chart */}
      <View style={styles.section}>
        <LineChart
          data={{
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
            datasets: [
              {
                data: data.writingActivities,
                color: () => '#83B5BD', // Set color of line to blue
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#F0DDBF', // Set chart background color to section's background color
            backgroundGradientFrom: '#F0DDBF',
            backgroundGradientTo: '#F0DDBF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>

      {/* Section 4: Writing Stats */}
      <View style={[styles.section, styles.sectionBox, { backgroundColor: '#FDFCE6' }]}>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Total Words Written: {data.writingActivities.reduce((a, b) => a + b, 0)}</Text>
        </View>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Top 3 Themes:</Text>
        </View>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Total Visits: {Math.floor(Math.random() * 1000)}</Text>
          <Text style={styles.mainText}>Words per Day: {Math.floor(Math.random() * 500)}</Text>
        </View>
      </View>

      {/* Section 5: Word Cloud */}
      <View style={styles.section}>
        <Text style={styles.mainText}>Word Cloud</Text>
        <View style={styles.wordCloud}>
          {data.wordCloud.map((word, index) => (
            <Text key={index} style={styles.word}>{word}</Text>
          ))}
        </View>
      </View>

      {/* Section 6: Mental Health Report */}
      <View style={[styles.section, styles.sectionBox, { backgroundColor: '#FDFCE6' }]}>
        <View style={styles.reportColumn}>
          <Text style={styles.mainText}>Weekly Mental Health Report (Feb 16 - Feb 23, 2025)</Text>
          <Text style={styles.introText}>
            Mood Overview:
            {'\n'}Your mood fluctuated between sadness, frustration, and mild anxiety. Key phrases like “I feel overwhelmed” and “I am so alone” indicate feelings of isolation and emotional strain.
            {'\n'}Mental Health Indicators:
            {'\n'}Depression: Signs of low energy and hopelessness were detected.
            {'\n'}Anxiety: Frequent mentions of stress and worry.
            {'\n'}Cognitive Distortions: Negative thinking patterns like catastrophizing and overgeneralization were evident.
            {'\n'}Suggestions for Improvement:
            {'\n'}- Mindfulness: Practice 10 minutes of daily mindfulness to reduce stress.
            {'\n'}- Physical Activity: Aim for 30 minutes of exercise to boost mood.
            {'\n'}- Therapy: Consider reaching out to a professional for support.
            {'\n'}- Journaling: Focus on small positive moments in your diary to shift your mindset.
            
            {'\n'}Writing Tip:
            {'\n'}Writing about your feelings, even briefly, can help process emotions. Try expressing gratitude or hope in your next entries. It’s a small step toward emotional healing.
          </Text>
          <Button 
            title="View Full Report"
            onPress={handleFullReport}
            color="#D88282" // Red color for button
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9E8EC', // Default background color
    paddingTop: 20,
    paddingBottom: 20,
  },
  section: {
    paddingVertical: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  sectionBox: {
    backgroundColor: '#FDFCE6',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  chart: {
    marginVertical: 10,
  },
  chartColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  introText: {
    fontSize: 16,
    color: '#333',
  },
  wordCloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  word: {
    fontSize: 16,
    margin: 5,
    color: '#333',
  },
  reportColumn: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
