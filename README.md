# Full Stack Animated Portfolio Website (MERN Stack)

Welcome to the **Full Stack Animated Portfolio Website** built using the **MERN Stack** (MongoDB, Express, React, Node.js) and integrated with **Tailwind CSS**, **DaisyUI**, and **Framer Motion** for animations. This repository contains both the frontend and backend of a fully functional, animated portfolio website.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Backend API](#backend-api)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:**
  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A next-generation, fast build tool and development server for React.
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  - **DaisyUI**: A component library for Tailwind CSS that provides pre-built UI components.
  - **Framer Motion**: A popular animation library for React to create smooth animations and transitions.

- **Backend:**
  - **Node.js**: JavaScript runtime used for the server-side of the application.
  - **Express**: A web application framework for Node.js.
  - **Nodemailer**: Used for sending emails directly from the application (specifically for the contact form).
  - **MongoDB**: NoSQL database used to store data.

## Features

- **Animated Portfolio:** Smooth animations with **Framer Motion** throughout the website for an engaging experience.
- **Responsive Design:** Fully responsive layout with **Tailwind CSS** and **DaisyUI** components, ensuring a seamless experience across all devices.
- **About Section:** Information about the project owner.
- **Skill & Service Sections:** A list of skills and services offered, presented in a visually appealing manner.
- **Portfolio Section:** Display of projects with details and links to view or visit them.
- **Contact Section:** A contact form that allows users to send messages, which are directly received via **Nodemailer**.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aadinath1234/AnimatePortfolio.git
   ```

2. Navigate to the project folder:
   ```bash
   cd AnimatePortfolio
   ```

3. Install the frontend dependencies:
   ```bash
   cd portfolio
   npm install
   ```

4. Run the frontend development server:
   ```bash
   npm run dev
   ```

5. Install the backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

6. Run the backend server using `nodemon`:
   ```bash
   nodemon server.js
   ```

7. Visit `http://localhost:5173` in your browser to view the application.

## Backend API

The backend API contains the following route:

- **POST /api/contact**: Handles the contact form submissions. It uses **Nodemailer** to send the message to your email.

## Folder Structure

```
/AnimatePortfolio
├── /portfolio              # Frontend React application (Vite)
│   ├── /public
│   ├── /src
│   ├── App.jsx             # Main component for the app
│   ├── main.jsx            # Entry point for the React app
│   └── index.css           # Global CSS (Tailwind CSS)
│
├── /backend                # Backend Node.js application
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /utils
│   └── server.js
│
├── README.md               # This file
└── package.json            # Project dependencies
```

## Usage

- **Header & Navbar:** The header contains the basic navigation for the website, including links to different sections (Home, About, Skills, Services, Portfolio, Contact).
- **About Section:** Displays information about the developer.
- **Skills & Services:** Lists your skills and services in a clean, organized manner.
- **Portfolio:** Showcases the projects you've worked on with links and descriptions.
- **Contact Form:** Users can fill out the contact form with their name, email, and message. Once submitted, the message is sent via **Nodemailer** to your specified email.

## Contributing

Feel free to fork this project and create pull requests. If you'd like to contribute, follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is open-source and available under the [MIT License](LICENSE).

---


