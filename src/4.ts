// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export {};

class Key {
  private signature: number = Math.floor(Math.random() * (10000 - 1000) + 1000);

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }

  getTenants(): Person[] {
    return this.tenants;
  }
}

const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

console.log(myHouse.getTenants());

export {};