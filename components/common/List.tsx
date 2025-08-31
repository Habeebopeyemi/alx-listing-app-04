/**
 * 1. Generics
Generics allow you to create reusable components that can work with 
any data type. They provide a way to create functions, classes, or 
interfaces that are type-agnostic but type-safe.
 */

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item)}</li>
    ))}
  </ul>
);

//export default List;
//import List from "./List";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return <List items={numbers} renderItem={item => <span>{item}</span>} />;
};

export default App;

/**
 * 2. Utility Types
TypeScript provides several utility types to facilitate common type
transformations. These include Partial, Required, Readonly, Record, Pick,
 and Omit.
 */
interface User {
  id: string;
  name: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Make all properties read-only
type ReadonlyUser = Readonly<User>;

// Create a type with a subset of properties
type UserName = Pick<User, "name">;

// Create a type by omitting certain properties
type UserWithoutAge = Omit<User, "age">;

/**
 * 3. Advanced Typing Patterns
Intersection Types
Intersection types allow you to combine multiple types into one.
 */

interface Address {
  street: string;
  city: string;
}

interface Contact {
  phone: string;
  email: string;
}

type UserProfile = User & Address & Contact;

/**
 * Union Types
Union types allow you to specify that a type can be one of several options.
 */

type Status = "loading" | "success" | "error";

interface StatusMessage {
  status: Status;
  message: string;
}

/**
 * 4. Conditional Types
Conditional types enable you to create types that depend on a condition.
 */

type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>; // 'yes'
type Test2 = IsString<number>; // 'no'

/**
 * 5. Type Guards
Type guards allow you to create functions that check
if a variable is of a certain type.
*/

interface Cat {
  meow: () => void;
}

interface Dog {
  bark: () => void;
}

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

function handlePet(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow();
  } else {
    pet.bark();
  }
}

/**
 * 
 * 6. Decorators
Decorators are a stage-2 proposal for JavaScript and can be
 used in TypeScript to add metadata to classes and methods.
Note that you need to enable the experimentalDecorators 
compiler option to use them.

Example: Class Decorator
 */

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class User {
  constructor(public name: string) {}
}
