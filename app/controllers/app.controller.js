const App = require('../models/app.model.js');

exports.create = (req, res) => {
    const test = new App({
        EinsteinID: req.body.EinsteinID,
        CovidTestCode: req.body.CovidTestCode,
        TestResult: req.body.TestResult,
        LotNumber: req.body.LotNumber
    });
    test
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the record",
            });
        });
};

exports.findAll = (req, res) => {
    App.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving test results.",
            });
        });
};