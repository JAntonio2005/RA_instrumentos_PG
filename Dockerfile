# Imagen base oficial de Node.js
FROM node:20

# Crear y usar el directorio de la app
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto del backend
EXPOSE 3000

# Comando para levantar el servidor
CMD ["node", "index.js"]
