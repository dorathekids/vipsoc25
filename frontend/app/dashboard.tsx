import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { StackedBarChart, BarChart, LineChart } from 'react-native-chart-kit';
import * as randomWords from 'random-words';

// const randomWords = require('random-words');

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
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Section 1: Mood Overview */}
      <View style={[styles.section, { backgroundColor: '#B9E8EC' }]}>
        <StackedBarChart
          data={{
            labels: ['Happy', 'Neutral', 'Sad', 'Depression'],
            legend: ['Happy', 'Neutral', 'Sad', 'Depression'],
            data: [data.moodOverview],
            barColors: ['#FF0000', '#FFCC00', '#87CEEB', '#1E3A5F'],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          hideLegend={true}
          style={styles.chart}
        />
      </View>

      {/* Section 2: Mood Percentage and Trends */}
      <View style={[styles.section, styles.sectionSmaller, { backgroundColor: '#FDFCE6' }]}>
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
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
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
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>

      {/* Section 3: Writing Activities Area Chart */}
      <View style={[styles.section, { backgroundColor: '#B9E8EC' }]}>
        <LineChart
          data={{
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
            datasets: [
              {
                data: data.writingActivities,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>

      {/* Section 4: Writing Stats */}
      <View style={[styles.section, styles.sectionSmaller, { backgroundColor: '#FDFCE6' }]}>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Total Words Written: {data.writingActivities.reduce((a, b) => a + b, 0)}</Text>
        </View>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Top 3 Themes:</Text>
          {randomWords(3).map((word: string, index: number) => (
            <Text key={index} style={styles.themeText}>{word}</Text>
          ))}
        </View>
        <View style={styles.chartColumn}>
          <Text style={styles.mainText}>Total Visits: {Math.floor(Math.random() * 1000)}</Text>
          <Text style={styles.mainText}>Words per Day: {Math.floor(Math.random() * 500)}</Text>
        </View>
      </View>

      {/* Section 5: Word Cloud */}
      <View style={[styles.section, { backgroundColor: '#B9E8EC' }]}>
        <Text style={styles.mainText}>Word Cloud</Text>
        <View style={styles.wordCloud}>
          {data.wordCloud.map((word, index) => (
            <Text key={index} style={styles.word}>{word}</Text>
          ))}
        </View>
      </View>

      {/* Section 6: Mental Health Report */}
      <View style={[styles.section, styles.sectionSmaller, { backgroundColor: '#FDFCE6' }]}>
        <Text style={styles.mainText}>Mental Health Report</Text>
        <Text style={styles.introText}>Score: {data.mentalHealthReport.score}</Text>
        <Text style={styles.introText}>Report: {data.mentalHealthReport.report}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9E8EC',
    paddingTop: 20,
    paddingBottom: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'relative',
  },
  sectionSmaller: {
    marginHorizontal: 30,
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
  themeText: {
    fontSize: 16,
    color: '#333',
  },
});
