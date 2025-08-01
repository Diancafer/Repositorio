// src/firebaseConfig.js

// Importa las funciones necesarias para los servicios que usaremos
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importamos la función para Autenticación
import { getFirestore } from "firebase/firestore"; // Importamos la función para la base de datos

// Tu configuración de Firebase
// Para que esto funcione, necesitas haber habilitado Autenticación en la consola de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBiF4-CEYiHEn1LsvnaIi5X_7sxUPZisYI",
  authDomain: "mi-portafolio-react.firebaseapp.com",
  projectId: "mi-portafolio-react",
  storageBucket: "mi-portafolio-react.firebasestorage.app",
  messagingSenderId: "290244648244",
  appId: "1:290244648244:web:057bebde7ca8cb0a369961",
  measurementId: "G-7PP6WSKWV4"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Autenticación y de Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Se inicializa el servicio de base de datos

// Exporta las instancias para que puedan ser usadas en cualquier otro componente
export { auth, db };

