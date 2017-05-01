import Ember from 'ember';
// import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model() {
  const id = this.paramsFor('manufacturer.car').id;

  return this.store.findRecord('brand', id);
}
});
