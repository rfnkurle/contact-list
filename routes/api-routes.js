// api-routes responsible for getting json data, adding new constact and deleting contact

var db = require("../models");

module.exports = function(app) {
    // this route should find all contacts in the table and display 
    //them as JSON, "get" is a browser request at that URL
    app.get("/api/contacts", function(req, res) {
        //db.Contact talks to the model in contact.js
        //findAll always returns an array
        db.Contact.findAll({

        //order by last name and first name    
        }).then(function(contacts){
            //want the response in request response cycle
            res.json(contacts);
        })
    });

    // this route should add a new contact to the table
    //takes info from front end form as req.body (express url encoded)
	app.post("/api/contacts", function(req, res) {
        //destructured to pulled each of these into their own variable that pulls from 
        //req.body
        var {firstName, lastName, contactType, phoneNumber, emailAddress}

       = req.body;

       var newContact = {
           firstName,
           lastName,
           contactType,
           phoneNumber,
           emailAddress
       }

       console.log(newContact)
        
       
        //sequelize for insert into
        db.Contact.create(newContact).then(function(contact){
            //REST best practice
            //any time you ake a request that creates new item in DB
            //you want to return to the user id JSON ex: id: 1, id: 2
            //{ id: whateverID}
            console.log(`Added contact ${contact.firstName} ${contact.lastName}`)//for backend
            res.json({ id: contact.id})//front end
        });
    });

    // this route should delete a contact from the table, if the id matches the ':id' url param
    //REST when you write your routes, have them tell a story
    ///api/contacts/ 7 <----- req.params.id is "7", :id in url is id
    app.delete("/api/contacts/:id", function(req, res) {
        db.Contact.destroy({
            where: {
                id: req.params.id//
            }
        }).then(function(contact){
            //Deleted contacts with id[id]
            console.log(`Deleted contact with ${contact.id}`)
            res.end();
        })
        
    });
}