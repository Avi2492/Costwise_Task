# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Setup the Application

- For setup you have to run this command in your terminal
  
  ```bash
     - npm create vite@latest
     - "Enter Project Name"
     - Select the tech stack "react"
     - Select the language "JavaScript"
     - "Your setup got succesfully added"
     - cd Project-name
     - npm install
  ```

# Setup for tailwind css in our project

- For tailwind setup go to the [tailwind CSS website](https://tailwindcss.com/docs/guides/vite)

  ```bash
     - npm install -D tailwindcss postcss autoprefixer
     - npx tailwindcss init -p
  ```

- Succesfully our tailwind css folder is setup in our project now we have to change talwind.config.js file

  ```JavaScript
     export default {
         content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
         ],
        theme: {
        extend: {},
       },
       plugins: [],
     }
  ```
  
- Add the Tailwind directives to your CSS Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

   ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
   ```

- Start your build process Run your build process with npm run dev.
  ```bash
     npm run dev
  ```
