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
});
