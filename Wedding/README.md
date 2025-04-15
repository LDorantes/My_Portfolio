## Estructura del Proyecto
```
WEDDING/
│
├── backend/
│   ├── generateQR.js         // Lógica para generar códigos QR
│   └── invitados.json        // Lista de invitados (nombres, UID, etc.)
│
├── dataconnect/              // (Auto-generado por Firebase)
│
├── frontend/
│   ├── css/                  // Estilos (a integrar Tailwind)
│   ├── img/                  // Imágenes para la web
│   ├── js/
│   │   ├── countdown.js      // Temporizador de cuenta regresiva
│   │   ├── firebase-init.js  // Inicialización de Firebase
│   │   ├── firebaseConfig.js // Configuración de Firebase
│   │   ├── lang.js           // Control de idioma (bilingüe)
│   │   └── main.js           // Script principal
│   ├── node_modules/
│   ├── index.html            // Página principal de la boda
│   ├── package.json          // Configuración del proyecto (npm)
│   └── package-lock.json
│
├── .firebaserc
├── .gitignore
├── firebase.json             // Config de deploy Firebase Hosting
├── firestore.indexes.json    // Índices para Firestore
└── firestore.rules           // Reglas de seguridad


```