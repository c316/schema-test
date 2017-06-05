Meteor.methods({
  insertFundraisersWithTrip: function (doc) {
    console.log("Started method insertFundraisersWithTrip with doc:");
    console.log(doc);
    check( doc, Fundraisers.schema );
    Fundraisers.insert(doc);
  },
});
