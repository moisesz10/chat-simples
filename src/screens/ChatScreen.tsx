import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { db } from '../firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { pickImage, uploadImageAsync } from '../lib/uploadImage';
import { v4 as uuid } from 'uuid';

interface Props {
  userId: string;
  chatId: string;
}

export default function ChatScreen({ userId, chatId }: Props) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // ouvir mensagens em tempo real
  useEffect(() => {
    const messagesRef = collection(db, 'threads', chatId, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => {
        const v = d.data() as any;
        return {
          _id: d.id,
          text: v.text || '',
          createdAt: v.createdAt?.toDate?.() ?? new Date(),
          user: v.user,
          image: v.image || undefined
        } as IMessage;
      });
      setMessages(data);
    });
    return () => unsub();
  }, [chatId]);

  // enviar texto
  const onSend = useCallback(
    async (msgs: IMessage[] = []) => {
      const m = msgs[0];
      const messagesRef = collection(db, 'threads', chatId, 'messages');
      await addDoc(messagesRef, {
        text: m.text,
        image: null,
        createdAt: serverTimestamp(),
        user: { _id: userId }
      });
    },
    [chatId, userId]
  );

  // enviar imagem
  const onPressAction = useCallback(async () => {
    const uri = await pickImage();
    if (!uri) return;
    const filePath = `images/${chatId}/${userId}-${uuid()}.jpg`;
    const downloadURL = await uploadImageAsync(uri, filePath);

    const messagesRef = collection(db, 'threads', chatId, 'messages');
    await addDoc(messagesRef, {
      text: '',
      image: downloadURL,
      createdAt: serverTimestamp(),
      user: { _id: userId }
    });
  }, [chatId, userId]);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: userId }}
        renderActions={() => (
          <TouchableOpacity
            style={{ paddingHorizontal: 12, paddingVertical: 8 }}
            onPress={onPressAction}
          >
            <Text style={{ fontSize: 20 }}>📷</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
