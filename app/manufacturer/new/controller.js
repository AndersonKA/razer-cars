import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    manufacturer: '',
    country: '',
  },

  actions: {
    submitForm() {
      const brand = this.store.createRecord('brand', this.formValues);

      brand.save()

      .then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer');
      });
},
}
});
