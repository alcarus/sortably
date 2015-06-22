'use strict';

Meteor.methods({
	'alcarus:sortably/reorder': function (collectionName, ids, delta) {
		check(collectionName, String);
		check(ids, [String]);
		check(delta, Number);

		Mongo.Collection.get(collectionName).update(
			{_id: {$in: ids}},
			{$inc: {order: delta}},
			{multi: true}
		);
	}
});