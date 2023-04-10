# BayMax  
- It’s a web app that can predict the disease based on user symptoms. 
- The data we’re using is taken from the Kaggle.
- Python & its libraries such as Pandas, Numpy, Matplotlib & Sklearn is used for model creation.
- React is used as Frontend and Sass is used for Styling. 
- Google Firebase & Firestore is used as Backend.
- Google OAuth is used for authentication purposes

**Live Link: <a href="https://disease-prediction-app-vercel.vercel.app/">BayMax</a>**

## Requirements
- Node v10+
- Configured firebase.config.js file
- Google Account

### ML Model <a href="https://dikshant09-disease-prediction-api.hf.space/run/predict">API</a>
Model is deployed on Hugging spaces using Gradio. <br>

#### POST Request

Input Payload
```yaml
{
  "data": [
     string, // represents symptoms
   ]
}
```

Response Object
```yaml
{
  "data": [
    string, // represents predictions
  ],
  "duration": (float) // number of seconds to run function call
}
```

## How to run

1. Create `firebase.config.js` file in `client/src/`

    Create a Firebase App using google account and then you will get below drive code & some API keys.
    <br>
    Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
```
2. Create `.env` file in `client/`

    If you want to use another disease prediction API, replace the below key with that one.

```yaml
REACT_APP_BACKEND_API  =  'https://dikshant09-disease-prediction-api.hf.space/run/predict'
```

3. Install dependencies and start the localhost server.

```
npm install
npm run start
```