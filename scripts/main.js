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
            "weight": 50,
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
                "x": 5,
                "y": 6,
                "z": 8
            }
        },
        {
            "weightMax": 50,
            "name": "26x19x9",
            "dimensions": {
                "x": 5,
                "y": 12,
                "z": 8
            }
        },
        {
            "weightMax": 50,
            "name": "17x11x11",
            "dimensions": {
                "x": 5,
                "y": 12,
                "z": 8
            }
        },
        {
            "weightMax": 50,
            "name": "18x9x7",
            "dimensions": {
                "x": 5,
                "y": 12,
                "z": 8
            }
        },
    ],
    "includeScripts": false
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
            data.toString();
            responseJSON = data;
            displayImage();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function displayImage(){
    let array = responseJSON.svgs;
    let svg = array[0];
    let image = document.getElementById('packageImage');
    image.setAttribute('src', svg);
    let src = image.getAttribute('src');


}

let cart = [
    new Item('item1', 10, 2, 2, 2, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('item2', 10, 1, 2, 3, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('item3', 10, 2, 7, 2, 2, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever"),
    new Item('item4', 10, 1, 3, 2, 1, 4, ['hollowknight', 'games', 'fun', 'decoration'], "whatever")
]


class Item {
    constructor(name, unitPrice, quantity, x, y, z, weight, tags, url) {
        this.name = name
        this.quantity = quantity
        this.unitPrice = unitPrice;
        this.totalPrice = unitPrice * quantity
        this.weight = weight;
        this.x = x;
        this.y = y;
        this.z = z;
        this.tags = tags;
        this.url = url;
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
            "quantity": this.quantity
        };
    }

}
