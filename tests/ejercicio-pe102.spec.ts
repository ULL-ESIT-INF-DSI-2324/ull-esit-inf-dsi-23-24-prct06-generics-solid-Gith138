import 'mocha';
import { expect } from 'chai'; 
import { NumericSearchableCollection, 
  StringSearchableCollection
} from '../src/ejercicio-pe102';

describe('NumericSearchableCollection', () => {
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([1, 2, 3, 4, 5]);

    const result = collection.search("3");

    expect(result).to.deep.equal([3]);
  });

  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([1, 2, 3, 4, 5]);

    const result = collection.search("4");

    expect(result).to.deep.equal([4]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([1, 2, 3, 4, 5]);

    const result = collection.search("1");

    expect(result).to.deep.equal([1]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([1, 2, 3, 4, 5]);

    const result = collection.search("5");

    expect(result).to.deep.equal([5]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([3, 4, 6, 7, 8, 9, 10]);

    const result = collection.search("9");

    expect(result).to.deep.equal([9]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([3, 4, 6, 7, 8, 9, 10]);

    const result = collection.search("10");

    expect(result).to.deep.equal([10]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([3, 4, 6, 7, 8, 9, 10]);

    const result = collection.search("6");

    expect(result).to.deep.equal([6]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([3, 4, 6, 7, 8, 9, 10]);

    const result = collection.search("8");

    expect(result).to.deep.equal([8]);
  });
  it('should search for a number', () => {
    const collection = new NumericSearchableCollection([3, 4, 6, 7, 8, 9, 10]);

    const result = collection.search("4");

    expect(result).to.deep.equal([4]);
  });
});

describe('StringSearchableCollection', () => {
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['apple', 'banana', 'cherry', 'date']);

    const result = collection.search('na');

    expect(result).to.deep.equal(['banana']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['apple', 'banana', 'cherry', 'date']);

    const result = collection.search('ap');

    expect(result).to.deep.equal(['apple']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['apple', 'banana', 'cherry', 'date']);

    const result = collection.search('che');

    expect(result).to.deep.equal(['cherry']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['apple', 'banana', 'cherry', 'date']);

    const result = collection.search('da');

    expect(result).to.deep.equal(['date']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['HOY', 'FUIMOS', 'MANDO', 'RITMICA', 'GIMNASIA','ARTISTICA']);

    const result = collection.search('HO');

    expect(result).to.deep.equal(['HOY']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['HOY', 'FUIMOS', 'MANDO', 'RITMICA', 'GIMNASIA','ARTISTICA']);

    const result = collection.search('FU');

    expect(result).to.deep.equal(['FUIMOS']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['HOY', 'FUIMOS', 'MANDO', 'RITMICA', 'GIMNASIA','ARTISTICA']);

    const result = collection.search('RIT');

    expect(result).to.deep.equal(['RITMICA']);
  });
  it('should search for a substring', () => {
    const collection = new StringSearchableCollection(['HOY', 'FUIMOS', 'MANDO', 'RITMICA', 'GIMNASIA','ARTISTICA']);

    const result = collection.search('MA');

    expect(result).to.deep.equal(['MANDO']);
  });
  
});
