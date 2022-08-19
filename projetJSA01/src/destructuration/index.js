const noms = ['germain', "dupont", "martin"];

let [germain, , martin] = noms;

console.log(germain);
console.log(martin);

const temperatures = [12, -11, 50, -5, 45, 5];

let [, t1, , t2] = temperatures;

console.log(t1 + " " + t2);

const voiture = {
    marque: "fiat",
    nom: "punto",
    carburant: "essence"
};

let { marque, carburant: carburantVoiture } = voiture;

console.log(marque + " " + carburantVoiture);
//console.log(carburant);

const monClient = {
    nom: 'client',
    prenom: 'Jules',
    adresse: {
        numero: 112,
        rue: 'rue principale',
        ville: 'Montpellier',
        cdp: '34000'
    },
    age: 40,
    client: true,
    contacts: []
}

let { age, adresse: { ville, cdp } } = monClient;

console.log(age + " " + ville + " " + cdp);

/**

 * je voudrai dans des variables

 * tabContacts = monClient.contacts

 * objAdresse = monClient.adresse

 */

let {
    contacts: tabContacts,
    adresse: objAdresse
} = monClient;

console.log(tabContacts);
console.log(objAdresse);

let {numero} = objAdresse;

console.log(numero);


