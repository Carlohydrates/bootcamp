var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person = {
    firstName: "Limuel",
    lastName: "Pogi",
    age: 18,
    phoneNumber: ["feu", "ust"],
    email: "sample@email.com",
};
person.phoneNumber.filter(function (number) { return number != "feu"; });
person.phoneNumber.push("sfna");
person.phoneNumber = __spreadArray(__spreadArray([], person.phoneNumber, true), ["new"], false);
var person2 = {
    firstName: "Mike",
    lastName: "kfnjfjef",
    age: 18,
    phoneNumber: ["7f", "lawson"],
    email: "sample@email.com",
};
var contacts = [person, person2];
contacts[0].email = "limuel@pogi.com";
var newContact = {
    firstName: "Dante",
    lastName: "Gulapa",
    age: 18,
    phoneNumber: ["7f", "lawson"],
    email: "dante@email.com",
};
var newContacts = contacts.map(function (contact) {
    contact.firstName = "CHANGED USING MAP";
    return contact;
});
console.log(contacts, newContacts);
