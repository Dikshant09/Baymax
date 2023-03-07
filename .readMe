# BayMax  
- It’s a web app which can predicts the disease based upon user symptoms. 
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

## How to run

1. Create `firebase.config.js` file in Client/src

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

2. Install dependencies and start the server

```
npm install
npm run start
```