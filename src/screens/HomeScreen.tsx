import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { usePomodoro } from '../hooks/usePomodoro';
import { TimerDisplay } from '../components/TimerDisplay';
import { TimeOptions } from '../components/TimeOptions';
import { ResetButton } from '../components/ResetButton';

const POMODORO_OPTIONS = [1, 35, 45, 60];
const INITIAL_TIME_MINUTES = POMODORO_OPTIONS[0];

export const HomeScreen = () => {
  const {
    timeRemaining,
    selectedTime,
    isActive,
    isTimerRunning,
    handleTimeButtonPress,
    handleResetPress,
    formatTime,
  } = usePomodoro(INITIAL_TIME_MINUTES);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>MyPomodoro</Text>
      </View>
      <TimerDisplay time={formatTime(timeRemaining)} />
      <TimeOptions
        options={POMODORO_OPTIONS}
        selectedTime={selectedTime}
        isActive={isActive}
        isTimerRunning={isTimerRunning}
        onSelectTime={handleTimeButtonPress}
      />
      {isActive && <ResetButton onReset={handleResetPress} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
}); 