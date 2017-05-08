import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteBrand(brand) {
      brand.destroyRecord().then(() => {
        this.transitionToRoute('manufacturer');
      });
    },

    deleteCar(car) {
      car.destroyRecord();
    }
  }
});
