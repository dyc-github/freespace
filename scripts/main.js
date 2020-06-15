let catalog = [
    new Item('stapler', 10.00, 9, 2, 5, 2, 1, ['office', 'utility'], "whatever"),
    new Item('lamp', 15.00, 9, 1, 4, 15, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('charger', 16.00, 9, 1, 2, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('plushie', 10.00, 9, 9, 6, 6, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('new extreme watch of the future', 1.00, 9, 3, 3, 3, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('cheap mechanical blue switches keyboard', 30.00, 1, 3, 12, 5, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('rock pops', 1.00, 9, 1, 3, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('pop rocks', 1.00, 9, 1, 3, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('water bottle light weight ', 2.00, 9, 6, 2, 2, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('toy car', 3.00, 2, 3, 5, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('nuka-cola pins', 4.00, 9, 1, 1, 1, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('toilet paper 2-pack', 5.00, 9, 4, 3, 3, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('bottle popcorn of popcorn kernels', 10.00, 9, 4, 3, 3, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('usb stick', 30.00, 9, 1, 1, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('board game', 23.00, 9, 4, 3, 3, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('battery pack', 12.00, 9, 1, 3, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('pet rock', 1.99, 9, 2, 2, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('bongo cat', 11.99, 9, 3, 4, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('giant pen set 60 pack', 60.00, 9, 6, 3, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('giant dorito', 120.20, 9, 1, 12, 12, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('lotion', 10.00, 9, 5, 2, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('sun screen', 10.00, 9, 5, 3, 2, 1, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('fine line pens', 20.00, 9, 5, 3, 1, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
];

let cart = new Cart();
cart.addItem(catalog[5]);
cart.addItem(catalog[16]);









//Note all units of size will be in inches and pounds. For items its rounded up and for boxes its rounded down
let key = 'hQFyfTngeaJqdksVgHfPrP0wVRBaEnOQxwck8jw1dE08yZ7aWsj9lb3rIULbt9CM';

let testSituationJSON = {
    "itemSets": [
        {
            "refId": 0,
            "weight": 2,
            "dimensions": {
                "x": 5,
                "y": 6,
                "z": 4
            },
            "quantity": 1
        },
        {
            "refId": 1,
            "color": "cornflowerblue",
            "weight": 1,
            "dimensions": {
                "x": 2.5,
                "y": 3,
                "z": 2
            },
            "quantity": 4
        }
    ],
    "boxTypes": [
        {
            "weightMax": 50,
            "name": "10x7x3",
            "dimensions": {
                "x": 10,
                "y": 7,
                "z": 3
            }
        },
        {
            "weightMax": 50,
            "name": "26x19x9",
            "dimensions": {
                "x": 26,
                "y": 19,
                "z": 9
            }
        },
        {
            "weightMax": 50,
            "name": "17x11x11",
            "dimensions": {
                "x": 17,
                "y": 11,
                "z": 11
            }
        },
        {
            "weightMax": 50,
            "name": "40x40x40",
            "dimensions": {
                "x": 40,
                "y": 40,
                "z": 40
            }
        },
    ],
    "includeScripts": false,
    "boxTypeChoiceGoal": 'most-items'
}


testSituationJSON.itemSets = []

alert(testSituationJSON.itemSets);


let testSituationString = new URLSearchParams(testSituationJSON).toString();
console.log(testSituationString);
let requestURL = "http://api.paccurate.io/" + testSituationString;
requestJSON()

function createRequestURL( key ){

}

let responseJSON;

function requestJSON (){
    fetch('http://api.paccurate.io/', {
        method: 'POST', // or 'PUT'

        headers: {
            'Authorization': 'apikey ' + key,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testSituationJSON),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            responseJSON = data;
            displayImage();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function displayImage(){
    let array = responseJSON.svgs;
    let figure = array[0];
    let imagContainer = document.getElementById('imageContainer');
    let image = document.getElementById('packageImage');
    figure.createAttribute('style', 'width');
    figure.setAttribute('width', 100);
    figure.createAttribute('style', 'height');
    figure.setAttribute('height', 100);
    imagContainer.appendChild(figure);

    let src = image.getAttribute('src');


}



class Cart extends Array(){
    addItem(item){
        if(!(item.totalQuantity <= 0)) {
            item.cartQuantity++;
            item.totalQuantity--;
            this.push(item);
            //add item to cart ui
        }
    }
}



class Item {
    constructor(name, unitPrice, totalQuantity, x, y, z, weight, tags, url) {
        this.name = name;
        this.totalQuantity = totalQuantity;
        this.cartQuantity=0;
        this.unitPrice = unitPrice;
        this.totalPrice = unitPrice * quantity;
        this.weight = weight;
        this.x = x;
        this.y = y;
        this.z = z;
        this.tags = tags;
        this.url = url;

    }

    volume(){
        return this.x*this.y*this.z;
    }



    toJSON(refId){
        return {
            refId: refId,
            "weight": this.weight,
            "dimensions": {
                "x": this.x,
                "y": this.y,
                "z": this.z
            },
            "quantity": this.cartQuantity;
        };
    }

}
