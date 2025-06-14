import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => (
  <View style={styles.resetButtonContainer}>
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  resetButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  resetButton: {
    backgroundColor: '#333333',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 