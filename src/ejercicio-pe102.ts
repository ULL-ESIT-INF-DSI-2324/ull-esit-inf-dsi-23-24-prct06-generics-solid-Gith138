interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}

interface Searchable<T>
  extends Collectable<T> {
  search(name: string ): T[] | undefined;
}

abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(protected items: T[]) {
  }; // Array de items

/*   getItems(): T[] { // Obtener los items
    return this.items; // Devuelve el array de items
  } */

  addItem(newItem: T): void { // Añadir un item
    this.items.push(newItem);
  }

  getItem(index: number): T { // Obtener un item
    return this.items[index]; // Devuelve el item en la posición index
  }

  removeItem(): T { // Eliminar un item
    return this.items.pop() as T; // Devuelve el último item del array, eliminándolo y usando el tipo T
  }

  getNumberOfItems(): number { // Obtener el número de items
    return this.items.length; // Devuelve el número de items en el array
  }

  abstract search(name: string): T[] | undefined; // Buscar un item
}

class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(items: number[]) {
    super(items);
  }
  search(numberToSearch: number) {
    return this.items.filter((item) => item === numberToSearch);
  }
}

class StringSearchableCollection extends SearchableCollection<string> {
  search(substringToSearch: string): string[] | undefined {
    return this.items.filter(item => item.includes(substringToSearch));
  }
}

