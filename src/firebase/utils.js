import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// firebase obj will have the above imports


/* ----------------------SETUP FIREBASE CONNECTION-------------------------------*/
const config = {
    apiKey: "AIzaSyD7mgmuZIWlFQF1olekhrLRzlRN9aOT3AI",
    authDomain: "crwn-db-23765.firebaseapp.com",
    databaseURL: "https://crwn-db-23765.firebaseio.com",
    projectId: "crwn-db-23765",
    storageBucket: "crwn-db-23765.appspot.com",
    messagingSenderId: "183816363458",
    appId: "1:183816363458:web:16b534b2cca2a40e1d0a5b",
    measurementId: "G-PQ0VS51PEG"
};
firebase.initializeApp(config);
// get firebase auth interface (https://firebase.google.com/docs/reference/js/firebase.auth.Auth)
export const auth = firebase.auth();
// NoSQL database
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


/* -------------------------------UTILITIES -----------------------------------------*/

// returns a userRef object, takes in a the auth
export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    // create snapShot
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creationDate = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                creationDate,
                ...additionalData
            })
        } catch (error) {
            console.log("Error: ", error.message);
        }
    }
    return userRef;
} 

// takes in a collection name to be created
// takes in an array of objects to be added to the DB
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch         = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

// takes in firebaseCollections.collections
// returns a properly formatted object
export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(
        (doc) => {
            const { title, items } = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title: title,
                items: items
            }
        });
    return transformedCollections.reduce( (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

// takes in firebaseHomePageSections.sections
// returns the same array
export const convertSectionsSnapshotToMap = (sections) => {
    const transformedSections = sections.docs.map( doc => doc.data());
    return transformedSections;
}