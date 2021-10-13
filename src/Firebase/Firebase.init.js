import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* Steps for Authentication  
-------------------
Step-1
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5.Enable Auth Method
-------------------
Step-2  Setup Component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
---------------
Step-3 Set AUth System
1. set up sign in Method
2. Setup sign Out Method
3. User State
4. Special Observer
5. return necessary methods and states from useFirebase
-------------
step 4: create auth context hook( useAuth)
1. create a auth context 
2. create context provider
3. Set context Provider Context Value
3. use Auth Provider
4. create useAuth Hook

-------------------
step 5: Create private route
1 create Private route
2. set Private route

----------------
step 6: Redirect after login
1. after login redirect user to their desired destination
*/
