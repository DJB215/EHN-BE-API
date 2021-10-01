const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
    EinsteinID:{
        type: String,
        required: true
    },
    JeffersonID: {
        type: String,
        default: ''
    },
    CovidTestCode: {
        type: String,
        default: ''
    },
    TestResult: {
        type: String,
        default: ''
    },
    LotNumber: {
        type: String,
        default: ''
    },
},  {
    timestamps: {
        createDate: 'created_at',
        updatedDate: 'updated_at'
    }
});

module.exports = mongoose.model('tests', AppSchema);