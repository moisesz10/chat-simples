import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import { ensureAnonymousAuth } from './src/firebase';

export default function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const uid = await ensureAnonymousAuth();
        setUserId(uid);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !userId) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  const chatId = 'global';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ChatScreen userId={userId} chatId={chatId} />
      </View>
    </SafeAreaView>
  );
}
