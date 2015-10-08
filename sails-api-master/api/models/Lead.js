/**
* Lead.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        Date: { type: "string" },
        CompanyName: { type: "string" },
        ContactPerson: { type: "string" },
        ContactFirstName: { type: "string" },
        ContactLastName: { type: "string" },
        Designation: { type: "string" },
        EmailId: { type: "email" },
        Phone1: { type: "string" },
        Ext: { type: "string" },
        LinkedIn: { type: "string" },
        Position: { type: "string" },
        Location: { type: "string" },
        CompanyURL: { type: "string" },
        JobDescription: { type: "string" },
        ClientAddress: { type: "string" },
        ClientCity: { type: "string" },
        ClientState: { type: "string" },
        ClientZip: { type: "string" },
        EmailSent: { type: "string" },
        Dialed: { type: "string" },
        Status: { type: "string" },
        Comments: { type: "string" }
       
    }
};

