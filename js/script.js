var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(country, city, zipcode, image, address) {
        this.country = country;
        this.city = city;
        this.zipcode = zipcode;
        this.img = image;
        this.address = address;
    }
    Locations.prototype.displayLocation = function () {
        return "\n            <div class=\"imgandtext\">\n                <h6>" + this.city + ", " + this.country + "</h6>\n                <img class = \"img-fluid rounded\" src = \"" + this.img + "\">\n                <p>" + this.address + ", " + this.zipcode + "</p>\n            </div>\n        ";
    };
    return Locations;
}());
var Visits = /** @class */ (function (_super) {
    __extends(Visits, _super);
    function Visits(country, city, zipcode, image, address, name) {
        var _this = _super.call(this, country, city, zipcode, image, address) || this;
        _this.name = name;
        return _this;
    }
    return Visits;
}(Locations));
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(country, city, zipcode, image, address) {
        return _super.call(this, country, city, zipcode, image, address) || this;
    }
    Places.prototype.displayPlace = function () {
        return "\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                " + this.displayLocation() + "\n            </div>\n        ";
    };
    return Places;
}(Locations));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(country, city, zipcode, image, phoneno, resttype, website, address, name) {
        var _this = _super.call(this, country, city, zipcode, image, address, name) || this;
        _this.phoneno = phoneno;
        _this.resttype = resttype;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.displayRestaurant = function () {
        return "\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <p><strong>" + this.name + "</strong></p>\n                " + this.displayLocation() + "\n                <p>" + this.resttype + ", " + this.website + "</p>\n            </div>\n        ";
    };
    return Restaurants;
}(Visits));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(country, city, zipcode, image, eventdate, ticketprice, address, name) {
        var _this = _super.call(this, country, city, zipcode, image, address, name) || this;
        _this.eventdate = eventdate;
        _this.ticketprice = ticketprice;
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return "\n            <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <p><strong>" + this.name + "</strong></p>\n                " + this.displayLocation() + "\n                <p>" + this.eventdate.toLocaleString() + ", <strong>&euro;" + this.ticketprice + "</strong></p>\n            </div>\n        ";
    };
    return Events;
}(Visits));
// script execution starts here
// places
var place1 = new Places("Italy", "Burano", 88875, "img/burano3.jpg", "Via Burano 22");
var place2 = new Places("Italy", "Padua", 23551, "img/padua.jpg", "Piazza Padua 15");
var place3 = new Places("Italy", "Varenna", 125893, "img/varenna.jpg", "Via Antica 36");
var place4 = new Places("Italy", "Venice", 784259, "img/venice02.jpg", "Piazza San Marco 85");
var places = [place1, place2, place3, place4];
for (var i = 0; i < places.length; i++) {
    document.getElementById("places").innerHTML += places[i].displayPlace();
}
// restaurants
var restaurant1 = new Restaurants("Italy", "Burano", 88875, "img/casadimaria.jpg", 5855555, "Italian Cuisine", "www.cuicina.it", "Via Burano 22", "La casa di Maria");
var restaurant2 = new Restaurants("Switzerland", "Lugano", 25368, "img/salumeriadalugano.jpg", 8898998, "Swiss charcuterie", "www.salumeria.ch", "Via Appia", "Salumeria da Lugano");
var restaurant3 = new Restaurants("Italy", "Burano", 88822, "img/ilgato.jpg", 5852236, "Italian Cuisine", "www.ilgato.it", "Via Burano 48", "Il Gato");
var restaurant4 = new Restaurants("Italy", "Padua", 99823, "img/cheesedeli.jpg", 8862588, "Italian Deli", "www.thecheesedeli.it", "Via Padua 48", "The Cheese Deli");
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4];
for (var i = 0; i < restaurants.length; i++) {
    document.getElementById("restaurants").innerHTML += restaurants[i].displayRestaurant();
}
// events country, city, zipcode, image, eventdate, ticketprice, address, name
var event1 = new Events("Italy", "Burano", 225888, "img/lace.JPG", new Date(2021, 8, 15, 17), 15, "Via Blanca 15", "Burano Lace Festival");
var event2 = new Events("Italy", "Venice", 25877, "img/venice03.JPG", new Date(2021, 9, 20, 19), 20, "Via Academica 15", "Venice Sunsets Fest");
var event3 = new Events("Italy", "Padua", 366584, "img/vintage.JPG", new Date(2021, 7, 20, 10), 9, "Via Aurelius 3", "Padua Vintage Market");
var event4 = new Events("Italy", "Bellagio", 58936, "img/walk.JPG", new Date(2021, 10, 28, 8), 5, "Piazza Centrale 3", "Bellagio Walking Tour");
var events = [event1, event2, event3, event4];
for (var i = 0; i < events.length; i++) {
    document.getElementById("events").innerHTML += events[i].displayEvent();
}