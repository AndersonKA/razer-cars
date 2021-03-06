import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    year: '',
    hp: '',
    price: '',
  },

  actions: {
    save() {
      const car = this.store.createRecord('car', this.formValues);
      car.set('brand', this.model);
      return car.save()
          .then(() => {
            this.set('formValues', {});
            this.transitionToRoute('manufacturer.car.index');
          });
    },
  }
});
