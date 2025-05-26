# Aprende Prisma con Node.js

Este proyecto te enseña cómo usar Prisma. Prisma es un ORM que facilita la conexión entre el backend y las bases de datos.

## ¿Qué es Prisma?

[Prisma](https://www.prisma.io/) es un ORM (Object-Relational Mapping) que proporciona una forma intuitiva y con tipado estricto para interactuar con bases de datos. Facilita enormemente el uso de las base de datos relacionales.

## Instalación

1. Inicializa un proyecto de Node.js `npm init -y`
2. Instalar prisma `npm install prisma --save-dev` , `npm install @prisma/client`
3. Empezar prisma `npx prisma init`

## Extensión

Existe una extensión oficial de Prisma para Visual Studio Code que ayuda a mejorar la experiencia al trabajar con Prisma.
Esta extensión ofrece:

- Resaltado de sintaxis (colores) para los archivos `.prisma`.
- Autocompletado inteligente de modelos, campos y atributos.
- Visualización de funciones y ayuda contextual para facilitar la escritura del esquema.
  
## Interfaz de Prisma

Prisma Studio es una herramienta gratuita incluida con Prisma que ofrece una interfaz gráfica para explorar y editar tus datos directamente desde el navegador. Con el comando `npx prisma studio`
