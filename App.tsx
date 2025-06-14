/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [selectedTime, setSelectedTime] = useState(25 * 60);

  const options = [25, 35, 45, 60];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isTimerRunning || timeRemaining === 0) {
      if (timeRemaining === 0) {
        setIsActive(false);
        setIsTimerRunning(false);
        // Aquí podrías agregar una alerta o sonido
      }
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, timeRemaining]);

  const handleTimeButtonPress = (minutes: number) => {
    const newSelectedTime = minutes * 60;

    if (selectedTime === newSelectedTime && isActive) {
      setIsTimerRunning(!isTimerRunning);
    } else {
      setSelectedTime(newSelectedTime);
      setTimeRemaining(newSelectedTime);
      setIsActive(true);
      setIsTimerRunning(true);
    }
  };

  const handleResetPress = () => {
    setTimeRemaining(selectedTime);
    setIsTimerRunning(true);
    setIsActive(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>MyPomodoro</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {options.map((minutes) => (
          <TouchableOpacity
            key={minutes}
            style={[
              styles.button,
              selectedTime === minutes * 60 && isActive && styles.activeButton,
            ]}
            onPress={() => handleTimeButtonPress(minutes)}
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

      {isActive && (
        <View style={styles.resetButtonContainer}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetPress}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      )}
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
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 72,
    fontWeight: '200',
    color: '#FFFFFF',
    fontFamily: 'monospace', // Para un look más de "timer digital"
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  button: {
    width: '40%', // Aprox. 2 por fila con espacio
    aspectRatio: 1, // Para que sea un cuadrado perfecto
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
    backgroundColor: '#5E5CE6', // Un color para destacar el botón activo
  },
  icon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  resetButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
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

export default App;
