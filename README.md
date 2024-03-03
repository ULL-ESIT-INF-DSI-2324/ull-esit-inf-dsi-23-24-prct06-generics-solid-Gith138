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
En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`.
**Ejercicio 4 - Impresoras y escáneres**
En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`.

**Ejercicio 5 - Servicio de mensajería**

En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`. 
No está cumpliendo con el `Principio de Inversión de Dependencia`, este principio dice que los módulos de alto nivel no pueden depender de módulos de bajo nivel. Y en este caso las clases `EmailService` y `ShortMessageService` son clases concretas de bajo nivel, y la clase `Notifier` (clase de alto nivel) depende directamente de estas clases de bajo nivel. 
```ts
// Interfaz que define el servicio de notificación
/**
 * @param {string} message
 * @interface NotificationService
 * @returns {string}
 * @export NotificationService

 */
interface NotificationService {
  notify(message: string): void;
}

/**
 * @param {string} message
 * @interface NotificationService
 * @returns {string}
 * @export NotificationService
 */

// Clase que permite enviar notificaciones por correo electrónico
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/***
 * @param {string} message
 * @interface EmailService
 * @returns {string}
 * @export EmailService
 */
// Clase que permite enviar notificaciones por SMS
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/***
 * @param {string} message
 * @interface ShortMessageService
 * @returns {string}
 * @export ShortMessageService
 */
// Clase que hace uso de diferentes tipos de servicios para realizar notificaciones
export class Notifier {
  constructor(private notificationService: NotificationService) {
  }

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Código del cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
```
Para que no suceda eso, cree una interface `NotificationService` que sirve como una abtracción. Tanto `EmailService` como `ShortMessageService` implementan esta interfaz. La clase `Notifier` ahora depende de la interfaz en lugar de clases concretas, cumpliendo así con el principio de inversión de dependencia. 

### Dificultades

  Esta práctica ha sido complicada, porque me ha resultado difícil entender bien el funcionamiento de las interfaces y demás, aunque son muy parecidas a las clases en c++(que es lo que se ha llevado estudiando desde principios de carrera). El problema es que al tener muchas maneras de implementarlas y demás, pues me ha costado mucho entenderlo a la primera(me sigue costando). También hay que tener en cuenta que el primer ejercicio me ha costado mucho de entender(he tenido que mandarle un correo, haciendo que me quedará sin tiempo para poder realizarla correctamente), y por suerte el segundo era similar al que ya habiamos hecho anteriormente, y lo único que había que hacer era cambiarle la estructura y demás.

  Grado de Ingeniería Informática

  Godgith John

  Desarrollo de Sistemas Informáticos

  Práctica 6 - Clases e interfaces genéricas. Principios SOLID
