// Interfaz de alto nivel
interface Device {
  performAction(): void;
}

// Implementaciones concretas
export class Printer implements Device {
  performAction(): void {
    console.log('Printing...');
  }
}

export class Scanner implements Device {
  performAction(): void {
    console.log('Scanning...');
  }
}

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
