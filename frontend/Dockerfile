# Usar una imagen base de Node.js con soporte para Angular
FROM node:16

# Definir el directorio de trabajo
WORKDIR /src/app

# Instalar Angular CLI de manera global
RUN npm install -g @angular/cli

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar las dependencias del proyecto Angular
RUN npm install

# Exponer el puerto en el que Angular sirve la aplicación
EXPOSE 4200

# Ejecutar el servidor Angular en el contenedor
CMD ng serve --host 0.0.0.0 --port 4200
