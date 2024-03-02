import { expect } from 'chai';
import { HouseholdItem, MovingBox } from '../src/ejercicio-1'; // Reemplaza 'yourModuleName' con el nombre real de tu módulo

describe('HouseholdItem', () => {
  it('should create a HouseholdItem with a name', () => {
    const itemName = 'Lamp';
    const item = new HouseholdItem(itemName);
    expect(item.name).to.equal(itemName);
  });
});

describe('MovingBox', () => {
  let movingBox: MovingBox<HouseholdItem>;

  beforeEach(() => {
    movingBox = new MovingBox<HouseholdItem>();
  });

  it('should add an item to the box', () => {
    const item = new HouseholdItem('Lamp');
    movingBox.addItem(item);
    expect(movingBox.searchItemByName('Lamp')).to.equal(item);
  });

  it('should remove an item from the box', () => {
    const item = new HouseholdItem('Lamp');
    movingBox.addItem(item);
    movingBox.removeItem(item);
    expect(movingBox.searchItemByName('Lamp')).to.be.undefined;
  });

  it('should list contents of the box', () => {
    const item1 = new HouseholdItem('Lamp');
    const item2 = new HouseholdItem('Books');
    movingBox.addItem(item1);
    movingBox.addItem(item2);

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    movingBox.listContents();

    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Box contents:', '- Lamp', '- Books']);
  });

  it('should search for an item in the box', () => {
    const item1 = new HouseholdItem('Lamp');
    const item2 = new HouseholdItem('Books');
    movingBox.addItem(item1);
    movingBox.addItem(item2);

    const searchResult = movingBox.searchItemByName('Books');
    expect(searchResult).to.equal(item2);
  });

  it('should handle removing a non-existing item', () => {
    const item1 = new HouseholdItem('Lamp');
    const item2 = new HouseholdItem('Books');
    movingBox.addItem(item1);

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    movingBox.removeItem(item2);

    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['"Books" not found in the box.']);
  });

  it('should handle searching for a non-existing item', () => {
    const item1 = new HouseholdItem('Lamp');
    movingBox.addItem(item1);

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    const searchResult = movingBox.searchItemByName('Books');

    console.log = originalLog;

    expect(searchResult).to.be.undefined;
    expect(consoleOutput).to.deep.equal([]);
  });
});
