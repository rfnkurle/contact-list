//sequlize and Datatypes come from index.js
module.exports = function(sequelize, DataTypes) {
    //table like a constructor- can be used to build table and data in that table
    var Contact = sequelize.define("Contact", {
        //contact becomes contacts in MySQL
        // firstName (VARCHAR, NOT NULL, between 1-30 characters)
        firstName: {
            type: DataTypes.STRING, //like VARCHAR in SQL
            allowNull: false,//must put somethings
            validate: {
                len: [1,30]  //sets length parameters

            }
        },
        // lastName (VARCHAR, NOT NULL, between 1-30 characters)
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,30]
            }
        },
        // contactType (VARCHAR, Default value "Personal")       
        contactType:{
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        // phoneNumber (VARCHAR, NULL, length 10 characters, numbers only)
        phoneNumber:{
            type: DataTypes.STRING,
            validate: {
                len: [10, 10],
                isNumeric: true //can create custom validations... if you want
            }
        },
        // emailAddress (VARCHAR, NULL, must be valid email format)
        emailAddress:{
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        }
    });
    // be sure to return the model to the brain
    return Contact;
};
