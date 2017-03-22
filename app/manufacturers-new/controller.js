import Ember from 'ember';
const apiUrl = 'https://razerapi.herokuapp.com/kae/basic/brands';

export default Ember.Controller.extend({
  formValues: {
    manufacturer: '',
    country: '',
  },

  actions: {
    save() {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
          .then(() => {
            this.transitionToRoute('manufacturer');
          });
    },
  }
});
