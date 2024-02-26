"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSearchableCollection = exports.NumericSearchableCollection = exports.SearchableCollection = void 0;
/**
 * @class SearchableCollection
 * @description Clase que implementa la interfaz Searchable
 * @extends SearchableCollection
 * @implements Searchable
 */
class SearchableCollection {
    constructor(items) {
        this.items = items;
    }
    ; // Array de items
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index]; // Devuelve el item en la posición index
    }
    removeItem() {
        return this.items.pop(); // Devuelve el último item del array, eliminándolo y usando el tipo T
    }
    getNumberOfItems() {
        return this.items.length; // Devuelve el número de items en el array
    }
}
exports.SearchableCollection = SearchableCollection;
/**
 * @class NumericSearchableCollection
 * @description Clase que implementa la interfaz Searchable
 * @extends SearchableCollection
 * @implements Searchable
 * @param numberToSearch
 * @returns number[] | undefined
 */
class NumericSearchableCollection extends SearchableCollection {
    search(numberToSearch) {
        return this.items.filter((item) => item === parseInt(numberToSearch));
    }
}
exports.NumericSearchableCollection = NumericSearchableCollection;
/**
 * @class StringSearchableCollection
 * @description Clase que implementa la interfaz Searchable
 * @extends SearchableCollection
 * @implements Searchable
 * @param substringToSearch
 * @returns string[] | undefined
 */
class StringSearchableCollection extends SearchableCollection {
    search(substringToSearch) {
        return this.items.filter(item => item.includes(substringToSearch));
    }
}
exports.StringSearchableCollection = StringSearchableCollection;
