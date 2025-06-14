import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerDisplayProps {
  time: string;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => (
  <View style={styles.timerContainer}>
    <Text style={styles.timerText}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 72,
    fontWeight: '200',
    color: '#FFFFFF',
    fontFamily: 'monospace',
  },
}); 