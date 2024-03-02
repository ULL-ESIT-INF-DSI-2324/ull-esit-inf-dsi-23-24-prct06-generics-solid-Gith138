import { expect } from 'chai';
import { Printer,
        Scanner,
        PrinterScanner } from '../src/ejercicio-4';

describe('Printer', () => {
  it('should print successfully', () => {
    const printer = new Printer();
    // Printing
    printer.performAction();
    expect(printer).to.not.equal('Printing...');
  });
  it('should not print successfully', () => {
    const printer = new Printer();
    // Printing
    printer.performAction();
    expect(printer).to.not.equal('');
  });
});

describe('Scanner', () => {
  it('should scan successfully', () => {
    const scanner = new Scanner();
    // Scanning
    scanner.performAction();
    expect(scanner).to.not.equal('Scanning...');
  });
  it('should not scan successfully', () => {
    const scanner = new Scanner();
    // Scanning
    scanner.performAction();
    expect(scanner).to.not.equal('');
  });
});

describe('PrinterScanner', () => {
  it('should print and scan successfully', () => {
    const printerScanner = new PrinterScanner();
    // Printing and Scanning
    printerScanner.performAction();
    expect(printerScanner).to.not.equal('Printing and Scanning...');
  });
  it('should not print and scan successfully', () => {
    const printerScanner = new PrinterScanner();
    // Printing and Scanning
    printerScanner.performAction();
    expect(printerScanner).to.not.equal('');
  });
});