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
