var db = require("../models"); //continue at 1:30 with Sarah
//populating form template, populating contact list, handlebars
module.exports = function(app) {
    // this route should render the Handlebars 'form' template
	app.get("/contacts/new", function(req, res) {
        res.render("form");
    });

    // this route should find all contacts in the table and render them using the Handlebars 
    // 'contacts' template, sorted ascending by lastName, then by firstName
    app.get("/", function(req, res) {
        db.Contact.findAll({
            order: [["lastName", "ASC"], ["firstName", "ASC"]]
        }).then(function(contacts){
            console.log(contacts.dataValues)
            //array format how you want it 
            res.render("contacts", { contacts: contacts, name: "Robby" } )
        })
    });

    // this route should find all contacts of a particular type (Personal or Business) and render them 
    // using the Handlebars 'contacts' template, sorted ascending by lastName, then by firstName
    app.get("/:type", function(req, res) {

        // BONUS: pass the contact type through to the handlebars template... be sure
        // to make the contact type title-cased!

    });
}