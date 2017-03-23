import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Controller.extend({
  formValues: {
    model: '',
    year: '',
    horsepower: '',
    price: '',
  },

  actions: {
    save() {
      fetch(`${config.apiUrl}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ ...this.formValues, brand_id: this.model.id }),
      }).then(r => r.json())
          .then(() => {
            this.transitionToRoute('manufacturer.car.index');
          });
    },
  }
});
