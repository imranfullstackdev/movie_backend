import dotenv from 'dotenv';
dotenv.config();


const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URL: 'mongodb+srv://mdimranfullstackdev:imran6011@cluster0.wowfubh.mongodb.net/'
};

// staging credential



const defaultConfig = {
  PORT: process.env.PORT || 3001
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'staging':
      return stagingConfig;
    default:
      return prodConfig;
  }
}

const result = envConfig(process.env.NODE_ENV);

// Merge objects while filtering out non-iterable properties
const mergedConfig = {
  ...defaultConfig,
  ...result,
};

// Log the merged config

export default mergedConfig;
