export default async (message: string, derivedKey: CryptoKey) => {
  try {
    // const message = JSON.parse(messageJSON);
    const text = message;
    const initializationVector = new Uint8Array(new TextEncoder().encode('IV_of_TORP')).buffer;

    const string = atob(text);
    const uintArray = new Uint8Array(Array.from(string).map((char) => char.charCodeAt(0)));
    const algorithm = {
      name: 'AES-GCM',
      iv: initializationVector,
    };
    const decryptedData = await window.crypto.subtle.decrypt(algorithm, derivedKey, uintArray);

    return new TextDecoder().decode(decryptedData);
  } catch (e) {
    return `error decrypting message: ${e}`;
  }
};
