import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model() {
  const id = this.paramsFor('brands.detail').id;

  return fetch(`${config.apiUrl}/brands/${id}`)
  .then(r => r.json());
}
});
