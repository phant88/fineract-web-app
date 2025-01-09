const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
const envConfig = dotenv.parse(fs.readFileSync('.env'));

// Ruta del archivo env.js
const targetPath = './src/assets/env.js';

// Ruta del archivo env.js
const templatePath = './src/assets/env.template.js';

// Leer el contenido actual de env.js
let envJsContent = fs.readFileSync(templatePath, 'utf8');

// Reemplazar las variables en env.js con los valores del archivo .env
Object.keys(envConfig).forEach((key) => {
  const regex = new RegExp(`\\$${key}`, 'g');
  envJsContent = envJsContent.replace(regex, envConfig[key]);
});

// Escribir el contenido actualizado en env.js
fs.writeFileSync(targetPath, envJsContent);
console.log('env.js file updated successfully.');
