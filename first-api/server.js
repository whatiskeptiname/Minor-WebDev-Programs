var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var ingredients = [{
        "id": "0",
        "text": "Eggs"
    },

    {
        "id": "1",
        "text": "frogs legs"
    }
];

app.get('/', function (request, response) {
    response.send('This is working awesome');
});

app.get('/ingredients', function (request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function (request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text == "") {
        response.status(500).send({
            error: "your ingredient must have text}"
        });
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredients/:ingredientId', function (request, response) {
    var new_text = request.body.text;

    if (!new_text || new_text === "") {
        response.status(500).send({
            error: " NO ingredient text!!!"
        });
    } else {
        var objectFound = false;
        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];

            if (ing.id === request.params.ingredientId) {
                ingredients[x].text = new_text;
                objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            response.status(500).send({
                error: "ingredient id not found!!!"
            });
        } else {
            response.status(200).send(ingredients);
        }
    }
});

var port = 3000;
app.listen(port, function () {
    console.log("Port on: " + port);
});