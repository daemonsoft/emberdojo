import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	engine: DS.attr(),
    type: DS.attr(),
    image: DS.attr()
});
