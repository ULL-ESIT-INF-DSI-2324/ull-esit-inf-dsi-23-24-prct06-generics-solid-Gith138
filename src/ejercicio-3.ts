// Clase que lee el contenido de un archivo
class FileReader {
  constructor(private filePath: string) {}

  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

// Clase que escribe datos en un archivo
class FileWriter {
  constructor(private filePath: string) {}

  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
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
