const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID("5a81fd56e779f9793c4ea928")
  // },{
  //   $set: {
  //     completed: false
  //   }
  // },
  // {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(JSON.stringify(res, undefined, 2));
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a81f505e779f9793c4ea6d1")
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  });

  //db.close();
});