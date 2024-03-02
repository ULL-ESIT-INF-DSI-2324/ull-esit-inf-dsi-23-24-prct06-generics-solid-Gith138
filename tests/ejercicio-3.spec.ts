import { expect } from 'chai';
import { FileReader, FileWriter } from '../src/ejercicio-3';

describe('FileReader', () => {
  it('should read file content successfully', () => {
    const filePath = 'example.txt';
    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.not.equal('');
  });
  it('should read file content successfully', () => {
    const filePath = 'e1.txt';
    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal('');
  });
  it('should read file content successfully', () => {
    const filePath = 'e2.txt';
    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal('');
  });
  it('should read file content successfully', () => {
    const filePath = 'e3.txt';
    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal('');
  });
  it('should read file content successfully', () => {
    const filePath = 'e4.txt';
    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.not.equal('');
  });
});

describe('FileWriter', () => {
  it('should write data to the file successfully', () => {
    const filePath = 'example_test.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
  it('should write data to the file successfully', () => {
    const filePath = 'e1_test.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
  it('should write data to the file successfully', () => {
    const filePath = 'e2_test.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
  it('should write data to the file successfully', () => {
    const filePath = 'e3_test.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
  it('should write data to the file successfully', () => {
    const filePath = 'e4.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
  it('should write data to the file successfully', () => {
    const filePath = 'e5_test.txt';
    const fileWriter = new FileWriter(filePath);
    const newData = 'Test data to be written into the file.';
    fileWriter.writeFile(newData);

    const fileReader = new FileReader(filePath);
    const content = fileReader.readFile();
    expect(content).to.equal(newData);
  });
});
