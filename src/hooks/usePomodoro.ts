import { useState, useEffect, useRef } from 'react';
import { Vibration } from 'react-native';
import { Audio } from 'expo-av';

export const usePomodoro = (initialTimeInMinutes: number) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialTimeInMinutes * 60);
  const [selectedTime, setSelectedTime] = useState(initialTimeInMinutes * 60);
  const soundObject = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true, // Permite sonar en modo silencioso en iOS
        });
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/sounds/alarm.mp3')
        );
        soundObject.current = sound;
      } catch (error) {
        console.error('Error loading sound', error);
      }
    };

    loadSound();

    return () => {
      // Descarga el sonido cuando el componente se desmonta
      soundObject.current?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isTimerRunning || timeRemaining === 0) {
      if (timeRemaining === 0) {
        setIsActive(false);
        setIsTimerRunning(false);
        // ¡Vibración y sonido!
        Vibration.vibrate([500, 500, 500]);
        soundObject.current?.replayAsync(); // Vuelve a reproducir el sonido desde el principio
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

  return {
    timeRemaining,
    selectedTime,
    isActive,
    isTimerRunning,
    handleTimeButtonPress,
    handleResetPress,
    formatTime,
  };
}; 