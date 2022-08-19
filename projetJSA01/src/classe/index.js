function getDefault() {
    return "valeur par defaut";
}

class Personne {

    #age;
    constructor(nom = getDefault(), prenom = getDefault()) {
        this.nom = nom;
        this.prenom = prenom;
    }

    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
    toString() {

        return `nom : ${this.nom}, prenom : ${this.prenom}, âge : ${this.#age} `;

    }
}

const maPersonne = new Personne("CGE", "Toto");
const maPersonneI = new Personne();

console.log(maPersonne);
console.log(maPersonneI);
maPersonneI.nom = "germain";
maPersonneI.age = 50;
console.log(maPersonneI);

class Client extends Personne {
    constructor(numSiret, nom, prenom) {
        super(nom, prenom);
        this.numSiret = numSiret;
    }
    toString() {

        return `${super.toString()}, Numéro de Siret : ${this.numSiret}`;

    }
}

console.log(new Client("00065245"));
let monClient = new Client("00065245");
console.log(monClient instanceof Personne);

console.log(monClient.toString());