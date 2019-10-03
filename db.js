const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
  });

  const cats = [
    {id: "1", name: 'kity',email:'kity@gmail',location:"IHRD"}, 
    {id: "2", name: 'puffy',email:'puffy@gmail',location:"NMCC"},
    {id: "3", name: 'ponnappan',email:'ponnappan@gmail',location:"ST.Thomas"},
    {id: "4", name: 'mathayechayan',email:'mathayechayan@gmail',location:"SRM"}
];


module.exports = cats; 