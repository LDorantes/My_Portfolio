```
my_wedding
│
├── frontend/                → React App (Vite o CRA + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── components/      → Header, Footer, RSVPForm, etc.
│   │   ├── pages/           → Home.jsx, Gallery.jsx, RSVP.jsx, etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── functions/              → Firebase Functions para lógica de backend
│   ├── index.js
│   └── package.json
│
├── firestore.rules         → Seguridad de Firestore
├── firebase.json           → Configuración de deploy
├── .firebaserc             → Config Firebase Project
└── README.md
```