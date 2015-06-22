'use strict';

var items = function items() { 
	return Items.find({}, {sort: ['order', 'asc']}); 
};

Munit.run({
	name: 'Sortably Tests',

	suiteSetup: function () {
  },

  setup: function () {
		if (Items.find({}).count() === 0) {
			[
				{description: 'Item 1', order: 1},
				{description: 'Item 2', order: 2},
				{description: 'Item 3', order: 3}
			].forEach(function (item) {
				Items.insert(item);
			});
		}
  },

  tearDown: function () {
		if (Items.find({}).count() > 0) {
			var ids = _.pluck(Items.find({}, {fields: {_id: 1}}).fetch(), '_id');
			_.each(ids, function (id) {
				Items.remove({_id: id});
			});
		}

		spies.restoreAll();
  },

  suiteTearDown: function () {
  },

  clientTestSortablyReorder: function (test) {
  	var container = document.createElement('DIV');
		var view = Blaze.renderWithData(Template.sortableList, items, container);

		var sortably = new Sortably('items');
  	var target = $(container).find('#sortable-list div:nth-child(1)');
  	var siblings = target.nextAll();
  	var siblingIds = [];
  	_.each(siblings, function (element) {
  		siblingIds.push(Blaze.getData(element)._id);
  	});

  	spies.create('meteorCall', Meteor, 'call');
  	spies.create('itemsUpdate', Items, 'update');

  	sortably.reorder(target);

  	expect(spies.meteorCall).to.have.been.calledWith('alcarus:sortably/reorder', 'items', siblingIds, 1);
  	expect(spies.itemsUpdate).to.have.been.calledWith(
			{_id: Blaze.getData(target[0])._id},
			{$set: {order: Blaze.getData(siblings[0]).order}}
		);

  	Blaze.remove(view);
  },

  clientTestTemplateRender: function(test) {
  	var container = document.createElement('DIV');
		var view = Blaze.renderWithData(Template.sortableList, items, container);

  	expect($(container).find('#sortable-list div').length).to.equal(3);

  	Blaze.remove(view);
  }

});