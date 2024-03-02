// Interfaz para representar un enser
interface Item {
  name: string;
}

// Interfaz para representar una caja que contiene enseres
interface Box<T extends Item> {
  addItem(item: T): void;
  removeItem(item: T): void;
  listContents(): void;
  searchItemByName(name: string): T | undefined;
}

// Clase que representa un enser del hogar
export class HouseholdItem implements Item {
  constructor(public name: string) {}
}

// Clase que representa una caja para trasladar enseres
export class MovingBox<T extends Item> implements Box<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
    console.log(`"${item.name}" has been added to the box.`);
  }

  removeItem(item: T): void {
    const index = this.items.findIndex((i) => i === item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`"${item.name}" has been removed from the box.`);
    } else {
      console.log(`"${item.name}" not found in the box.`);
    }
  }

  listContents(): void {
    console.log('Box contents:');
    this.items.forEach((item) => console.log(`- ${item.name}`));
  }

  searchItemByName(name: string): T | undefined {
    return this.items.find((item) => item.name === name);
  }
}

// Ejemplo de uso
const item1 = new HouseholdItem('Lamp');
const item2 = new HouseholdItem('Books');
const item3 = new HouseholdItem('Clothes');

const movingBox = new MovingBox<HouseholdItem>();

movingBox.addItem(item1);
movingBox.addItem(item2);
movingBox.addItem(item3);

movingBox.listContents();

const searchResult = movingBox.searchItemByName('Books');
if (searchResult) {
  console.log(`Found "${searchResult.name}" in the box.`);
} else {
  console.log('Item not found in the box.');
}

movingBox.removeItem(item2);

movingBox.listContents();