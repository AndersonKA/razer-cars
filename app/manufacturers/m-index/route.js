import Ember from 'ember';
import config from 'razer-cars/config/environment';

// const api Url = 'https://razerapi.herokuapp.com/ryan/basic/brands';

export default Ember.Route.extend({
  model() {
    return fetch(config.apiUrl)
    .then(r => r.json());
  }
});
