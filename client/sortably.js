'use strict';

Sortably = function (collectionName) {
	this.collectionName = collectionName;

	this.reorder = function (target) {
		var targetPrev = target.prev()[0];

		if (_.isNull(targetPrev) || _.isUndefined(targetPrev)) {
			this.saveOrder(target, target.nextAll(), 1);
		} else {
			this.saveOrder(target, target.prevAll(), -1);
		}
	}

	this.saveOrder = function (target, siblings, orderDelta) {
		var siblingIds = [];

		_.each(siblings, function (element) {
			siblingIds.push(Blaze.getData(element)._id);
		});

		Meteor.call('alcarus:sortably/reorder', this.collectionName, siblingIds, orderDelta);

		Mongo.Collection.get(this.collectionName).update(
			{_id: Blaze.getData(target[0])._id},
			{$set: {order: Blaze.getData(siblings[0]).order}}
		);
	}

};

Sortably.create = function (collectionName, listElement, options) {
	var sortably = new Sortably(collectionName);

	options = _.extend(options || {}, {
		stop: function (event, ui) {
			sortably.reorder(ui.item);
		}
	});

	listElement.sortable(options);
};