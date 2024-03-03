[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138?branch=main)

# Informe
## Práctica 6 - Clases e interfaces genéricas. Principios SOLID
### Introducción
En esta práctica hay que resolver una serie de ejercicios de programación que me permitirán conocer más en profundidad las clases e interfaces genéricas de Typescript, y también hacer que nuestro código cumpla con los **Principios SOLID** orientado a objetos.

### Objetivos a lograr realizando esta práctica
El objetivo de esta práctica es aprender acerca de `clases genéricas` e `interfaces genéricas`, buscando acerca de sus implementaciones. Además de aprender a utilizar nuevas herramientas como el `Instanbul`ayuda a saber qué partes del código no están siendo probadas y `Coveralls`muestra de manera atractiva qué tan bien se están haciendo las pruebas. 
Para intalarlo se pone
```ts
[()$]npm install --save-dev nyc coveralls
```

Una vez instalado se debe poner en el fichero `package.json`
```ts
  "scripts": {
    "coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
}
```
En la página de coveralls, se tendrá que guardar el **Token** secreto que te dan en tu repositorio y guardarlo en un fichero que se llamará
```ts
[()$] touch .coveralls.yml
```

Y ya para ejecutarlo se usa
```ts
[()$] npm run coverage
```

### Ejercicios y su explicación
**Ejercicio 1 - La mudanza**
**Ejercicio 2 - Facturas en diferentes formatos**
**Ejercicio 3 - Gestor de ficheros**
**Ejercicio 4 - Impresoras y escáneres**
**Ejercicio 5 - Servicio de mensajería**
En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`

### Dificultades

  Esta práctica ha sido complicada, porque me ha resultado difícil entender bien el funcionamiento de las interfaces y demás, aunque son muy parecidas a las clases en c++(que es lo que se ha llevado estudiando desde principios de carrera). El problema es que al tener muchas maneras de implementarlas y demás, pues me ha costado mucho entenderlo a la primera(me sigue costando). También hay que tener en cuenta que el primer ejercicio me ha costado mucho de entender(he tenido que mandarle un correo, haciendo que me quedará sin tiempo para poder realizarla correctamente), y por suerte el segundo era similar al que ya habiamos hecho anteriormente, y lo único que había que hacer era cambiarle la estructura y demás.

  Grado de Ingeniería Informática

  Godgith John

  Desarrollo de Sistemas Informáticos

  Práctica 6 - Clases e interfaces genéricas. Principios SOLID
