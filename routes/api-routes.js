var db = require("../models");

module.exports = function(app) {
    // this route should find all contacts in the table and display them as JSON
    //get is just a url request
    app.get("/api/contacts", function(req, res) {
        db.Contact.findAll({
            // order by last name and first name
        }).then(function (contacts){
             res.json(contacts);   
        })
    });

    // this route should add a new contact to the table
    //takes information from front end from req.body
	app.post("/api/contacts", function(req, res) {
        var { firstName, lastName, contactType, phoneNumber, emailAddress} 
        = req.body
        var newContact ={
           firstName, 
           lastName,
           contactType,
           phoneNumber,
           emailAddress
       }
       console.log(newContact)
       
        db.Contact.create()
    });

    // this route should delete a contact from the table, if the id matches the ':id' url param
	app.delete("/api/contacts/:id", function(req, res) {
        
    });
}