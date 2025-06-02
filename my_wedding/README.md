# 💍 Andy & Leo — Sitio de Boda

Un proyecto hecho con amor, código y mucha ilusión para compartir con nuestros seres queridos este momento inolvidable.

---

## 🎯 Objetivo del proyecto

Este sitio fue desarrollado para ofrecer a nuestros invitados una experiencia digital elegante, práctica y personalizada. Aquí podrán:

- Leer los detalles del evento
- Ver nuestra agenda del día
- Recorrer una galería de fotos
- Confirmar su asistencia (RSVP) de forma segura
- Consultar nuestra mesa de regalos
- Acceder desde un enlace único o escanear un QR

---

## 🧰 Tecnologías utilizadas

| Herramienta      | Uso principal                              |
|------------------|---------------------------------------------|
| **React**        | Interfaz moderna en frontend                |
| **Vite**         | Compilación rápida para desarrollo React    |
| **Tailwind CSS** | Estilos responsivos y visuales elegantes    |
| **Firebase**     | Backend con Firestore y hosting             |
| **React Router** | Navegación tipo SPA y lectura de tokens     |

---

## 🧱 Estructura del sitio

| Sección            | Función                                         |
|--------------------|--------------------------------------------------|
| `HeroSection`      | Presentación de los novios y fecha del evento    |
| `AgendaSection`    | Cronograma del día de la boda                    |
| `GallerySection`   | Galería de fotos especiales                      |
| `RSVPSection`      | Confirmación de asistencia con token             |
| `GiftSection`      | Mesa de regalos con enlaces externos             |
| `Footer`           | Frase final y créditos                           |

---

## 🔐 Confirmación RSVP

Cada invitado recibe un **link único con token personalizado**, por ejemplo:
https://leoandy-wedding.com/?token=abc123

Este enlace le permitirá:

- Ver su nombre y número de acompañantes permitidos
- Confirmar asistencia
- Registrar los nombres de quienes lo acompañan

---

## 📦 Estructura de Firestore

### `guests`
```json
{
  "name": "Juan Pérez",
  "token": "abc123",
  "maxGuests": 3,
  "companions": ["", "", ""],
  "confirmed": false
}

```

##🚀 ¿Cómo correr el proyecto?
1. Clona este repositorio
2. Entra al folder del frontend:
 ```
cd frontend
    npm install
    npm run dev
```
3.Configura tu conexión Firebase en /src/services/firebase.js
4.Asegúrate de tener Firestore habilitado en modo producción
5. Coloca tus imágenes en public/images/ para la galería y regalos

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

## ❤️ Gracias
Gracias por ser parte de este momento tan especial.
Cada línea de este sitio fue escrita pensando en ustedes, los que caminan a nuestro lado.

¡Nos vemos en la boda!

— Andy & Leo
