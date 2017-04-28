import Ember from 'ember';

var subjects = [{
  title: "Where's the best place to live in the tech world?",
  owner: "Fred",
}, {
  title: "PC or Mac, a life long search thru the intertwining narrative of fan-boys?",
  owner: "Holly",
}, {
  title: "Can we transfer current through chemtrails?",
  owner: "Eugene",
}];
// wont need ^this^ at all, but i'm on a plane for the next four hours so this is gunna be my db.

export default Ember.Route.extend({
  model() {
    return subjects;
  },
});
