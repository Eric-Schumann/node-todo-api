const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch.' })
  //   .then((result) => {
  //     console.log(result);
  //   });
  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch.' });

  // db.collection('Users').findOneAndDelete({ 
  //   _id: new ObjectID("5a81e917e7c6bd65dcd733d6") 
  // }).then((result) => {
  //     console.log(JSON.stringify(result, undefined, 2));
  // });

  db.collection('Users').deleteMany({
    name: 'Eric Schumann'
  });

  //db.close();
});