let key = 'hQFyfTngeaJqdksVgHfPrP0wVRBaEnOQxwck8jw1dE08yZ7aWsj9lb3rIULbt9CM';
let testSituationJSON = {
    "itemSets": [
        {
            "refId": 0,
            "color": "tomato",
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
            "weight": 2,
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
            "weightMax": 150,
            "name": "5x6x8",
            "dimensions": {
                "x": 5,
                "y": 6,
                "z": 8
            }
        },
        {
            "weightMax": 150,
            "name": "5x12x8",
            "dimensions": {
                "x": 5,
                "y": 12,
                "z": 8
            }
        }
    ],
    "includeScripts": false
}
let testSituationString = new URLSearchParams(testSituationJSON).toString();
console.log(testSituationString);
let requestURL = "http://api.paccurate.io/" + testSituationString;
requestJSON()

function createRequestURL( key ){

}

function requestJSON (){
    fetch('http://api.paccurate.io/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testSituationJSON),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            data.toString();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    // fetch(requestURL).then(function(result) {
    //     return result.json();
    // }).then(function(json) {
    //     console.log(json);
    // });
    // let request = new XMLHttpRequest();
    // request.open('POST', requestURL, true);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function() {
    //     console.log(request.response)
    // }
}







function addContainer(itemContainerNumber) {
    let itemContainer = document.getElementById( "itemContainer" + itemContainerNumber);
    let template


}
