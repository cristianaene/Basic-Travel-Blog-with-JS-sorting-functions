class Locations {
    public country: string;
    public city: string;
    public zipcode: number;
    public address: string;
    public img: string;
    constructor (country, city, zipcode, image, address) {
        this.country = country;
        this.city = city;
        this.zipcode = zipcode;
        this.img = image;
        this.address = address;
    }
    displayLocation () : string {
        return `
            <div class="imgandtext">
                <h6>${this.city}, ${this.country}</h6>
                <img class = "img-fluid rounded" src = "${this.img}">
                <p>${this.address}, ${this.zipcode}</p>
            </div>
        `;
    }
}


class Visits extends Locations {
    public name : string;
    constructor (country, city, zipcode, image, address, name) {
        super(country, city, zipcode, image, address);
        this.name = name;
    }
}

class Places extends Locations {
    constructor (country, city, zipcode, image, address) {
        super(country, city, zipcode, image, address);
    }
    displayPlace () : string {
        return `
            <div class="col-lg-3 col-md-6 col-sm-12">
                ${this.displayLocation()}
            </div>
        `;
    }
}

class Restaurants extends Visits {
    public phoneno: number;
    public resttype: string;
    public website: string;
    constructor (country, city, zipcode, image, phoneno, resttype, website, address, name) {
        super(country, city, zipcode, image, address, name);
        this.phoneno = phoneno;
        this.resttype = resttype;
        this.website = website;
    }
    displayRestaurant () : string {
        return `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <p><strong>${this.name}</strong></p>
                ${this.displayLocation()}
                <p>${this.resttype}, ${this.website}</p>
            </div>
        `;
    }
}

class Events extends Visits {
    public eventdate : Date;
    public ticketprice : number;
    constructor (country, city, zipcode, image, eventdate, ticketprice, address, name) {
        super(country, city, zipcode, image, address, name);
        this.eventdate =  eventdate;
        this.ticketprice = ticketprice;
    }
    displayEvent() : string {
        return `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <p><strong>${this.name}</strong></p>
                ${this.displayLocation()}
                <p>${this.eventdate.toLocaleString()}, <strong>&euro;${this.ticketprice}</strong></p>
            </div>
        `;
    }
}



// script execution starts here

// places
let place1 = new Places("Italy", "Burano", 88875, "img/burano3.jpg", "Via Burano 22");
let place2 = new Places("Italy", "Padua", 23551, "img/padua.jpg", "Piazza Padua 15");
let place3 = new Places("Italy", "Varenna", 125893, "img/varenna.jpg", "Via Antica 36");
let place4 = new Places("Italy", "Venice", 784259, "img/venice02.jpg", "Piazza San Marco 85");

let places : Array <Places> = [place1, place2, place3, place4];

for (let i = 0; i < places.length; i++) {
    document.getElementById("places").innerHTML += places[i].displayPlace();
   }

// restaurants

let restaurant1 = new Restaurants("Italy", "Burano", 88875, "img/casadimaria.jpg", 5855555, "Italian Cuisine", "www.cuicina.it","Via Burano 22", "La casa di Maria" );
let restaurant2 = new Restaurants("Switzerland", "Lugano", 25368, "img/salumeriadalugano.jpg", 8898998, "Swiss charcuterie", "www.salumeria.ch", "Via Appia", "Salumeria da Lugano");
let restaurant3 = new Restaurants("Italy", "Burano", 88822, "img/ilgato.jpg", 5852236, "Italian Cuisine", "www.ilgato.it", "Via Burano 48", "Il Gato");
let restaurant4 = new Restaurants("Italy", "Padua", 99823, "img/cheesedeli.jpg", 8862588, "Italian Deli", "www.thecheesedeli.it", "Via Padua 48", "The Cheese Deli");

let restaurants : Array <Restaurants> = [restaurant1, restaurant2, restaurant3, restaurant4];

for (let i = 0; i < restaurants.length; i++) {
    document.getElementById("restaurants").innerHTML += restaurants[i].displayRestaurant();
}

// events country, city, zipcode, image, eventdate, ticketprice, address, name
let event1 = new Events("Italy", "Burano", 225888, "img/lace.JPG", new Date(2021,8,15,17), 15, "Via Blanca 15", "Burano Lace Festival");
let event2 = new Events("Italy", "Venice", 25877, "img/venice03.JPG", new Date(2021,9,20,19), 20, "Via Academica 15", "Venice Sunsets Fest");
let event3 = new Events("Italy", "Padua", 366584, "img/vintage.JPG", new Date(2021,7,20,10), 9, "Via Aurelius 3", "Padua Vintage Market");
let event4 = new Events("Italy", "Bellagio", 58936, "img/walk.JPG", new Date(2021,10,28,8), 5, "Piazza Centrale 3", "Bellagio Walking Tour");

let events = [event1, event2, event3, event4];

for (let i = 0; i < events.length; i++) {
    document.getElementById("events").innerHTML += events[i].displayEvent();
}

