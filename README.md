# MyPomodoro

A clean, minimalist Pomodoro timer for iOS and Android built with React Native. This application helps you manage your time and stay focused using the Pomodoro Technique.

## Features

- **Selectable Timer Durations**: Easily switch between common Pomodoro intervals: 25, 35, 45, and 60 minutes.
- **Dynamic Timer Control**: Play or pause the active timer with a single tap on the timer display.
- **Reset Functionality**: Instantly reset the timer back to the default 25-minute session.
- **Audio & Haptic Feedback**: Receive a notification with sound and vibration when a Pomodoro session is complete.
- **Sleek Interface**: A beautiful, dark-themed UI that's easy on the eyes.

## Tech Stack

- **React Native**: Core framework for building the native application.
- **TypeScript**: For robust, type-safe code.
- **React Native Vector Icons**: For crisp, high-quality icons.
- **React Native Video**: For native audio playback for the alarm.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Watchman](https://facebook.github.io/watchman/) (for macOS)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [CocoaPods](https://cocoapods.org/) (for iOS dependencies)

### Installation & Running

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd MyPomodoro
    ```

2.  **Install JavaScript dependencies:**

    ```bash
    npm install
    ```

3.  **Install native iOS dependencies:**

    ```bash
    cd ios && pod install
    ```

4.  **Run the application:**

    - **For iOS:**

      ```bash
      npm run ios
      ```

    - **For Android:**
      ```bash
      npm run android
      ```

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see the app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run the app — you can also build it directly from Android Studio or Xcode.
