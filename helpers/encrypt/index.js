// import crypto from 'crypto';

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
// const IV_LENGTH = 16;

// const encrypt = (text) => {
//   const iv = crypto.randomBytes(IV_LENGTH);
//   const cipher = crypto.createCipheriv(
//     'aes-256-cbc',
//     Buffer.from(ENCRYPTION_KEY),
//     iv
//   );
//   let encrypted = cipher.update(text);

//   encrypted = Buffer.concat([encrypted, cipher.final()]);

//   return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
// };

// // Function to encrypt an object
// const encryptObject = (object) => {
//   const jsonString = JSON.stringify(object);
//   return encrypt(jsonString);
// };

// const decrypt = (text) => {
//   const textParts = text.split(':');
//   const iv = Buffer.from(textParts.shift(), 'hex');
//   const encryptedText = Buffer.from(textParts.join(':'), 'hex');
//   const decipher = crypto.createDecipheriv(
//     'aes-256-cbc',
//     Buffer.from(ENCRYPTION_KEY),
//     iv
//   );
//   let decrypted = decipher.update(encryptedText);

//   decrypted = Buffer.concat([decrypted, decipher.final()]);

//   return decrypted.toString();
// };

// // Function to encrypt an object
// const decryptObject = (object) => {
//   const data = decrypt(object);
//   return JSON.parse(data);
// };

// export default { encryptObject, decryptObject };
