This solution uses `Linking.getInitialURL()` to get the initial URL on app launch and handles subsequent URLs with `Linking.addEventListener`:
```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };
    handleInitialUrl();
  }, []);

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      // Handle URL here
      console.log('Deep Link:', event.url);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log('Initial URL:', initialUrl);
      // Handle initial URL
    }
  }, [initialUrl]);

  // ... rest of your app
}
```