[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138?branch=main)
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Gith138/actions/workflows/node.js.yml)

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

En este ejercicio, lo que se debe hacer es gestionar los enseres que hay que trasladar de una vivienda a otra durante una mudanza. Estos pueden trasladarse en cajas y en ellas se puede poder almacenar diferentes tipos de enseres. A esa caja se le puede añadir y eliminar enseres, además de poder listar el contenido de cada una de ellas. también se puede buscar enseres en las cajas.
Primero creé, las interfaces que representan la caja y los enseres, `Box`(donde este hereda de la interfaz `Item` y donde implementé los distintos métodos que este tendrá) 
```ts
// Interfaz para representar una caja que contiene enseres
interface Box<T extends Item> {
  addItem(item: T): void;
  removeItem(item: T): void;
  listContents(): void;
  searchItemByName(name: string): T | undefined;
}
```
y `Item`
```ts
// Interfaz para representar un enser
interface Item {
  name: string;
}
```
Después creé las clases `MovingBox` y `HouseholdItem`
```ts
// Clase que representa un enser del hogar
class HouseholdItem implements Item {
  constructor(public name: string) {}
}
```
En donde `HouseHoldItem` crea los enseres de la casa.
Y ya en la clase `MovingBox<T extends Item> implements Box<T>`(`<T extends Item>`que T puede ser cualquier tipo que tenga al menos las propiedades definidas en la interfaz `Item`)(`implements Box<T>` que implementa la interfaz `Box`). 
Ahora creo las funciones de la interfaz `Box`:
- `addItem` => Añado enseres a la caja
```ts
  addItem(item: T): void {
    this.items.push(item);
    console.log(`"${item.name}" has been added to the box.`);
  }
```
- `removeItem` => Elimino enseres de la caja
```ts
  removeItem(item: T): void {
    const index = this.items.findIndex((i) => i === item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`"${item.name}" has been removed from the box.`);
    } else {
      console.log(`"${item.name}" not found in the box.`);
    }
  }
```
- `listContents` => Muestro uan lista de los enseres
```ts
  listContents(): void {
    console.log('Box contents:');
    this.items.forEach((item) => console.log(`- ${item.name}`));
  }

```
- `searchItemByName` => Busco los enseres
```ts
  searchItemByName(name: string): T | undefined {
    return this.items.find((item) => item.name === name);
  }
```

**Ejercicio 2 - Facturas en diferentes formatos**

En este ejercicio, lo que se debe hacer es gestionar facturación básica. Entre las funcionalidades, el sistema deberá permitir generar facturas en diferentes formatos como, por ejemplo, PDF o HTML. Además, su diseño deberá permitir añadir nuevos formatos de generación de facturas sin necesidad de modificar el resto del código que haya implementado.
El principio de SOLID que se debe respetar es el de `Principio de Abierto/Cerrado (Open/Closed Principle)`. Este principio establece que una clase debe estar abierta para su extensión pero cerrada para su modificación. 
```ts
// Interfaz para representar un elemento en una factura
/**
 * @param {string} description
 * @param {number} quantity
 * @param {number} price
 * @interface InvoiceItem
 * @returns {string}
 */
export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

/**
 * @param {InvoiceItem[]} items
 * @interface InvoiceGenerator
 * @returns {string}
 * @export InvoiceGenerator
 * @template InvoiceItem
 */
// Interfaz para el generador de factura
interface InvoiceGenerator {
  generateInvoice(items: InvoiceItem[]): string;
}

/**
 * @param {InvoiceGenerator} generator
 * @interface Invoice
 * @returns {string}
 * @export Invoice
 * @template InvoiceItem
 * @template InvoiceGenerator
 */
// Clase base para facturas
export class Invoice {
  constructor(private generator: InvoiceGenerator) {}

  generate(items: InvoiceItem[]): string {
    return this.generator.generateInvoice(items);
  }
}

/**
 * @param {InvoiceItem[]} items
 * @interface PDFInvoiceGenerator
 * @returns {string}
 * @export PDFInvoiceGenerator
 * @implements {InvoiceGenerator}
 * @template InvoiceItem
 * @template string
 */
// Generador de factura en formato PDF
export class PDFInvoiceGenerator implements InvoiceGenerator {
  generateInvoice(items: InvoiceItem[]): string {
    // Lógica de generación de factura en formato PDF
    return 'PDF Invoice:\n' + this.formatItems(items);
  }

  private formatItems(items: InvoiceItem[]): string {
    return items.map(item => `${item.description} - ${item.quantity} x $${item.price}`).join('\n');
  }
}

// Generador de factura en formato HTML
export class HTMLInvoiceGenerator implements InvoiceGenerator {
  generateInvoice(items: InvoiceItem[]): string {
    // Lógica de generación de factura en formato HTML
    return '<html><body>' + this.formatItems(items) + '</body></html>';
  }

  private formatItems(items: InvoiceItem[]): string {
    return items.map(item => `<p>${item.description} - ${item.quantity} x $${item.price}</p>`).join('');
  }
}

// Ejemplo de uso
const items: InvoiceItem[] = [
  { description: 'Product A', quantity: 2, price: 25.0 },
  { description: 'Product B', quantity: 1, price: 30.0 },
];

const pdfInvoice = new Invoice(new PDFInvoiceGenerator());
console.log(pdfInvoice.generate(items));

const htmlInvoice = new Invoice(new HTMLInvoiceGenerator());
console.log(htmlInvoice.generate(items)); 
```
En este código, he definido las interfaces `InvoiceItem` para representar los elementos de la factura y `InvoiceGenerator` para el generador de factura. Luego, creé las clases `PDFInvoiceGenerator` y `HTMLInvoiceGenerator` que implementan la interfaz `InvoiceGenerator` para generar facturas en formatos PDF y HTML.

La clase `Invoice` se encarga de recibir un generador y utilizarlo para generar la factura, siguiendo así el `Principio de Abierto/Cerrado (Open/Closed Principle)`. Esto hace que se pueda agregar nuevos generadores de factura sin modificar la clase `Invoice`.

**Ejercicio 3 - Gestor de ficheros**

En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`. Este código lo que hace es coger un fichero de entrada y meterle información(`'This is new content to be written into the file.'`) en él. Para que funcione, hay que descargarse `@types/node`
```ts
[()$] npm install --save-dev @types/node
```
No está cumpliendo con el `Principio de Interfaz Única (Single Responsibility Principle)`, este principio dice que cada clase debe cumplir con una sola tarea.
```ts
import * as fs from 'fs'; // se pone por lo de @types/node

/**
 * @param filePath: string
 * @interface FileReader
 * @returns {string}
 * @export FileReader
 */
// Clase que lee el contenido de un archivo
export class FileReader {
  constructor(private filePath: string) {}

  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', (error as Error).message);
      return '';
    }
  }
} 

/**
 * @param filePath: string
 * @interface FileWriter
 * @returns {void}
 * @export FileWriter
 */
// Clase que escribe datos en un archivo
export class FileWriter {
  constructor(private filePath: string) {}

  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', (error as Error).message);
    }
  }
}

// Cliente
const filePath = 'example.txt';

// Leyendo contenido
const fileReader = new FileReader(filePath);
const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

// Escribiendo contenido
const newData = 'This is new content to be written into the file.';
const fileWriter = new FileWriter(filePath);
fileWriter.writeFile(newData);

// Actualizando contenido
const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);
```
He creado dos clases `FileReader` y `FileWriter` cada una con su propia tarea. Y he eliminado la dependencia de `filePath` en `FileManager`ya que cada una gestiona su propio archivo.

**Ejercicio 4 - Impresoras y escáneres**

En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`. Este código implementa impresoras, en donde lo imprime y escáneres, donde lo escanean. `Printer` y `Scanner` 
No está cumpliendo con el `Principio de Interfaz Única (Single Responsibility Principle)`, este principio dice que cada clase debe cumplir con una sola tarea. Tambien no cumple con el `Principio de Inversión de Dependencia`, este principio dice que los módulos de alto nivel no pueden depender de módulos de bajo nivel.
En este código, todas las clases (`Printer`, `Scanner`, `PrinterScanner`) dependen directamente de la interfaz `PrintableScannable`. Esto puede considerarse una violación del principio de inversión de dependencia, ya que las clases de alto nivel (`Printer`, `Scanner` y `PrinterScanner`) dependen de una implementación concreta (`PrintableScannable`), en lugar de depender de abstracciones(o interfaces de bajo nivel).
```ts
/**
 * @param performAction
 * @interface Device
 * @returns {void}
 */
// Interfaz de alto nivel
interface Device {
  performAction(): void;
}

/**
 * @param performAction
 * @interface Printer
 * @returns {void}
 */
// Implementaciones concretas
export class Printer implements Device {
  performAction(): void {
    console.log('Printing...');
  }
}

/**
 * @param performAction
 * @interface Scanner
 * @returns {void}
 * @export Scanner
 */
export class Scanner implements Device {
  performAction(): void {
    console.log('Scanning...');
  }
}

/**
 * @param performAction
 * @interface PrinterScanner
 * @returns {void}
 * @export PrinterScanner
 */
export class PrinterScanner implements Device {
  performAction(): void {
    console.log('Printing and Scanning...');
  }
}

// Cliente
const printer = new Printer();
// Printing
printer.performAction();

const scanner = new Scanner();
// Scanning
scanner.performAction();

const printerScanner = new PrinterScanner();
// Printing and Scanning
printerScanner.performAction();
```
Para que no suceda eso, lo que hice fue crear una interfaz de alto nivel `Device`, que no use las funcionalidades comunes(`print()` y `scan()`), sino que use uno en general(` performAction(): void`), que después se implementará en las diferentes clases.
Y además las clases `Printer`(solo imprime), `Scanner`(solo escanéa) y `PrinterScanner`(imprime y escanéa), solo tienen una única tarea.

**Ejercicio 5 - Servicio de mensajería**

En este ejercicio, se debe comprobar si el código implementado, cumple con los `Principios SOLID`. Este código, lo que hace es enviar notificaciones por correo o por SMS y en la clase `Notifier` puedes usar cualquiera de los dos métodos.
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


**Ejercicio Modificación**

Creé una interface `Collectable<T>`, en donde se implementa los distintos métodos:
- `addItem` => Añade elementos
- `getItem`=> Obtiene el elemento
- `removeItem`=> Elimina el elemento
- `getNumberOfItems` => Obtiene el número de elementos

Creé otra `Searcheable<T>`, con un método que es `search`, que busca los elementos
Después cree una clase abstracta `SearchableCollection<T> implements Searchable<T>, Collectable<T>`
Que tiene como atributo privado un array de elementos `protected items: T[]`. En esta clase implemento las interfaces creadas anteriormente, para poder usar sus métodos
```ts
  addItem(newItem: T): void { // Añadir un item
    this.items.push(newItem);
  }

  getItem(index: number): T { // Obtener un item
    return this.items[index]; // Devuelve el item en la posición index
  }

  removeItem(): T { // Eliminar un item
    return this.items.pop() as T; // Devuelve el último item del array, eliminándolo y usando el tipo T
  }

  getNumberOfItems(): number { // Obtener el número de items
    return this.items.length; // Devuelve el número de items en el array
  }

  abstract search(name: string): T[] | undefined; // Buscar un item
```
En el caso del método `search`, lo puse de manera abstracta, haciendo que se necesite crear otras clases para poder utilizarlo. 
Cree dos clases para:
1. Buscar un elemento numérico en una array
```ts
export class NumericSearchableCollection extends SearchableCollection<number> {
  search(numberToSearch: string) { // Buscar un número
    return this.items.filter((item) => item === parseInt(numberToSearch));
  }
}
```
2. Buscar un elemento en una cadena de caracteres
```ts
export class StringSearchableCollection extends SearchableCollection<string> {
  search(substringToSearch: string): string[] | undefined { // Buscar un substring
    return this.items.filter(item => item.includes(substringToSearch));
  }
}

```

### Dificultades

  Esta práctica ha sido dificíl, ya que me cuesta mucho entender bien las estructuras de herencias, clases, interfaces, y demás, pero haciendo los ejercicios se va entendiendo mejor las cosas. Igual me pasa con los Principios SOLID, ya que hay veces que es difiíl saber cual se cumple y cualés no, pero para eso están los ejercicios. :)

  
### Bibliografía

- [Apuntes general del Campus de la Asignatura](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/)
  
  Grado de Ingeniería Informática

  Godgith John, alu:0101463858

  Desarrollo de Sistemas Informáticos

  Práctica 6 - Clases e interfaces genéricas. Principios SOLID
