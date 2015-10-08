/**
 * LeadController
 *
 * @description :: Server-side logic for managing Leads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        Lead.find().exec(function (err, persons) {
            return res.send(persons);
        });
    },

    create: function (req, res) {

        Lead.create({
            date: req.body.date,
            companyname: req.body.companyname,
            contactperson: req.body.contactperson,
            contactfirstname: req.body.contactfirstname,
            contactlastname: req.body.contactlastname,
            designation: req.body.designation,
            emailid: req.body.emailid,
            phone1: req.body.phone1,
            ext: req.body.ext,
            linkedin: req.body.linkedin,
            position: req.body.position,
            location: req.body.location,
            companyurl: req.body.companyurl,
            jobdescription: req.body.jobdescription,
            clientaddress: req.body.clientaddress,
            clientcity: req.body.clientcity,
            clientstate: req.body.clientstate,
            clientzip: req.body.clientzip,
            emailsent: req.body.emailsent,
            dialed: req.body.dialed,
            status: req.body.status,
            comments: req.body.comments
          
        }).exec(function createCB(err, created) {
            created.save(function (err) {
                if (err) {
                    res.send({ status: "false", error: err });
                } else {
                    res.send({ status: "true" });
                }
            });
            
        });
    },

    update: function (req, res) {
        var id = req.param("id", null);
        Lead.findOne(id).exec(function findOneCB(err, lead) {
            if (lead === undefined || lead == null) {
                return res.send({ status: "false", error: "No record found." });
            }
            lead.date = req.body.date;
            lead.companyname = req.body.companyname;
            lead.contactperson = req.body.contactperson;
            lead.contactfirstname = req.body.contactfirstname;
            lead.contactlastname = req.body.contactlastname;
            lead.designation = req.body.designation;
            lead.emailid = req.body.emailid;
            lead.phone1 = req.body.phone1;
            lead.ext = req.body.ext;
            lead.linkedin = req.body.linkedin;
            lead.position = req.body.position;
            lead.location = req.body.location;
            lead.companyurl = req.body.companyurl;
            lead.jobdescription = req.body.jobdescription;
            lead.clientaddress = req.body.clientaddress;
            lead.clientcity = req.body.clientcity;
            lead.clientstate = req.body.clientstate;
            lead.clientzip = req.body.clientzip;
            lead.emailsent = req.body.emailsent;
            lead.dialed = req.body.dialed;
            lead.status = req.body.status;
            lead.comments = req.body.comments;
            lead.save(function (err) {
                if (err) {
                    res.send({ status: "false", error: err });
                } else {
                    res.send({ status: "true" });
                }
            });
        });

    },

    delete: function (req, res) {
        var id = req.param("id", null);

        Lead.findOne(id).exec(function findOneCB(err, lead) {
            if (lead === undefined || lead == null) {
                return res.send({ status: "false", error: "No record found." });
            }
            lead.destroy(function (err) {
                if (err) {
                    res.send({ status: "false", error: err });
                } else {
                    res.send({ status: "true" });
                }
            });
        });
    },

    view: function (req, res) {
        var id = req.param("id", null);
        console.log(id);
        Lead.findOne(id).done(function (err, leadResponse) {
            if (err) {
                res.send({ status: "false", error: err });
            } else {
                res.send({ status: "true", lead: leadResponse });
            }
        });
    }
};

