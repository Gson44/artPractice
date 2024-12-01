import { app } from './firebaseConfiguration.js'
import { getStorage } from "firebase/storage";

const storage = getStorage(app);
console.log("Beginning Storage");
console.log(storage);
console.log("Ending Storage");