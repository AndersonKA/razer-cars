import Ember from 'ember';

const apiUrl = 'https://razerapi.herokuapp.com/kae/basic/brands';

export default Ember.Route.extend({
  model() {
    return fetch(apiUrl)
    .then(r => r.json());
  }
});
