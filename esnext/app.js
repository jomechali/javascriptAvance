let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

let { city, temperature } = weather;

console.log(city + " " + temperature);

let [parisId, nycId, ...otherCitiesId] = citiesId;

console.log(parisId + " " + nycId + " " + otherCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    toString() {
        let properties = Object.keys(this).map(prop => this[prop]).join(", ");
        let toReturn = this.constructor.name + " [" + properties + "]";
        return toReturn;
    }

    static getDefalutTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.png");
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);

console.log(parisTrip.toString());

parisTrip.price = 100;

console.log(parisTrip.toString());

const defalutTrip = Trip.getDefalutTrip();
console.log(defalutTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl);
        super.price = price;

    }
    toString(){
        return super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());




