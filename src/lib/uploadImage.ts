import * as ImagePicker from 'expo-image-picker';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


export async function pickImage(): Promise<string | null> {
const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (!perm.granted) return null;


const result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.Images,
allowsEditing: false,
quality: 0.9
});


if (result.canceled || !result.assets?.length) return null;
return result.assets[0].uri;
}


export async function uploadImageAsync(uri: string, path: string): Promise<string> {
// transforma URI local em blob
const response = await fetch(uri);
const blob = await response.blob();


const fileRef = ref(storage, path);
await uploadBytes(fileRef, blob);
return await getDownloadURL(fileRef);
}