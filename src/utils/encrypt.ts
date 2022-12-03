export default async (text: string, derivedKey: CryptoKey) => {
  const encodedText = new TextEncoder().encode(text);

  const encryptedData = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: new TextEncoder().encode('IV_of_TORP') }, derivedKey, encodedText);

  const uintArray = new Uint8Array(encryptedData);

  const intArray = Array.from(uintArray);

  const string = String.fromCharCode.apply(null, intArray);

  const base64Data = btoa(string);

  return base64Data;
};
