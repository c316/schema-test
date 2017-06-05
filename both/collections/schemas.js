import SimpleSchema from 'simpl-schema';

Schema = {};

Fundraisers.schema = new SimpleSchema( {
  fname: {
    type: String,
    label: "First Name",
  },
  lname: {
    type: String,
    label: "Last Name"
  },
  email: {
    type: String,
    label: "Email Address",
    regEx: SimpleSchema.RegEx.Email
  },
  fundId: {
    type: String,
    optional: true,
  }
});