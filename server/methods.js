Meteor.methods({
  insertDocAndUseCheck: function (doc) {
    console.log("Started method insertDocAndUseCheck with doc:");
    console.log(doc);
    check( doc, TestCollection.schema );
    TestCollection.insert(doc);
  },
});
