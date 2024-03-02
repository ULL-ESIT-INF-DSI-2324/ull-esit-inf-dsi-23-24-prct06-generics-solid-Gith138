import { expect } from 'chai';
import { Invoice, PDFInvoiceGenerator, HTMLInvoiceGenerator, InvoiceItem } from '../src/ejercicio-2';

describe('PDFInvoiceGenerator', () => {
  it('should generate PDF invoice', () => {
    const generator = new PDFInvoiceGenerator();
    const items: InvoiceItem[] = [
      { description: 'Product A', quantity: 2, price: 25.0 },
      { description: 'Product B', quantity: 1, price: 30.0 },
    ];
    const result = generator.generateInvoice(items);
    expect(result).to.include('PDF Invoice:');
    expect(result).to.include('Product A - 2 x $25');
    expect(result).to.include('Product B - 1 x $30');
  });
});

describe('HTMLInvoiceGenerator', () => {
  it('should generate HTML invoice', () => {
    const generator = new HTMLInvoiceGenerator();
    const items: InvoiceItem[] = [
      { description: 'Product A', quantity: 2, price: 25.0 },
      { description: 'Product B', quantity: 1, price: 30.0 },
    ];
    const result = generator.generateInvoice(items);
    expect(result).to.include('<html><body><p>Product A - 2 x $25</p><p>Product B - 1 x $30</p></body></html>');
  });
});

describe('Invoice', () => {
  it('should generate invoice using HTML generator', () => {
    const htmlGenerator = new HTMLInvoiceGenerator();
    const invoice = new Invoice(htmlGenerator);
    const items: InvoiceItem[] = [
      { description: 'Product A', quantity: 2, price: 25.0 },
      { description: 'Product B', quantity: 1, price: 30.0 },
    ];
    const result = invoice.generate(items);
    expect(result).to.include('<html><body><p>Product A - 2 x $25</p><p>Product B - 1 x $30</p></body></html>');
  });
});
