import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([23, 50, -5, 0]);
const characterCollection = new CharactersCollection('XnxadsAb');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
