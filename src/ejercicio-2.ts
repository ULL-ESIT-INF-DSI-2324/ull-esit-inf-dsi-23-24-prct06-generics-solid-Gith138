// Interfaz para representar un elemento en una factura
export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

// Interfaz para el generador de factura
interface InvoiceGenerator {
  generateInvoice(items: InvoiceItem[]): string;
}

// Clase base para facturas
export class Invoice {
  constructor(private generator: InvoiceGenerator) {}

  generate(items: InvoiceItem[]): string {
    return this.generator.generateInvoice(items);
  }
}

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
