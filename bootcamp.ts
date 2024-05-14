interface Person {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string[];
  address?: string;
  email?: string;
}

const person: Person = {
  firstName: "Limuel",
  lastName: "Pogi",
  age: 18,
  phoneNumber: ["feu", "ust"],
  email: "sample@email.com",
};

person.phoneNumber.filter((number) => number != "feu");

person.phoneNumber.push("sfna");

person.phoneNumber = [...person.phoneNumber, "new"];

const person2: Person = {
  firstName: "Mike",
  lastName: "kfnjfjef",
  age: 18,
  phoneNumber: ["7f", "lawson"],
  email: "sample@email.com",
};

const contacts: Person[] = [person, person2];

contacts[0].email = "limuel@pogi.com";

const newContact: Person = {
  firstName: "Dante",
  lastName: "Gulapa",
  age: 18,
  phoneNumber: ["7f", "lawson"],
  email: "dante@email.com",
};

const newContacts = contacts.map((contact) => {
  contact.firstName = "CHANGED USING MAP";
  return contact;
});

console.log(contacts, newContacts);
