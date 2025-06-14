import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface TimeOptionsProps {
  options: number[];
  selectedTime: number;
  isActive: boolean;
  isTimerRunning: boolean;
  onSelectTime: (minutes: number) => void;
}

export const TimeOptions: React.FC<TimeOptionsProps> = ({
  options,
  selectedTime,
  isActive,
  isTimerRunning,
  onSelectTime,
}) => (
  <View style={styles.buttonsContainer}>
    {options.map(minutes => (
      <TouchableOpacity
        key={minutes}
        style={[
          styles.button,
          selectedTime === minutes * 60 && isActive && styles.activeButton,
        ]}
        onPress={() => onSelectTime(minutes)}
      >
        <Text style={styles.buttonText}>{minutes}'</Text>
        {selectedTime === minutes * 60 && isActive && (
          <Feather
            name={isTimerRunning ? 'pause' : 'play'}
            size={28}
            color="white"
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  button: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#333333',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  activeButton: {
    backgroundColor: '#5E5CE6',
  },
  icon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
}); 