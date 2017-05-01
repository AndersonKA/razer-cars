import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateBrand() {
      const car = this.model;

      car.save().then(() => {
        this.transitionToRoute('manufacturer.car', this.model);
      });
    }
  }
});
