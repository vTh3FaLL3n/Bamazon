var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "June 8,1996",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as ID ${connection.threadId} \n`);
    showInventory();
});

function showInventory() {
    console.log("Welcome to Bamazon! Here is a list of all our products: \n");
    connection.query('SELECT item_id AS "Item ID", product_name AS "Item Name", price AS "Price per Item" FROM products', function (err, res) {
        if (err) throw err;
        console.table(res);

        inquirer.prompt([{
                name: "enterID",
                type: "input",
                message: "Please enter the Item ID for the item you would like to purchase: "
            },
            {
                name: "enterQuantity",
                type: "input",
                message: "How many of this item would you like to buy?"
            }
        ]).then(function (response) {
            
        

        });
    });
}