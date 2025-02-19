# Inconsistent Deep Link Handling with Expo Linking API

This repository demonstrates a bug where Expo's `Linking.addEventListener` for handling deep links does not always trigger when the app is already running and a deep link is tapped. This inconsistency is particularly noticeable on iOS but can also affect Android.

The example code showcases how to set up deep link handling using `Linking.addEventListener`.  The bug is that the `url` parameter in the event listener's callback function is not always populated as expected when the app is already open, leading to unexpected application behavior.

## Steps to Reproduce

1. Clone this repository.
2. Run the app using Expo Go.
3. Open a new browser tab and navigate to a deep link provided by the app.
4. Note that the app may or may not correctly navigate when it's already open (Inconsistency is key here).

## Solution

This issue seems to be related to how Expo handles background processes and the event listener's scope. The solution included provides a more reliable approach using `Linking.getInitialURL()` to check for the URL on app load and using a combination of `Linking.addEventListener` for subsequent links. This is to handle both cases where the user opens the app via a deep link and where the app is already open.