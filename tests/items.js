Items = new Mongo.Collection('items');

Items.allow({
	insert: function (userId, item) { return true; },
	update: function (userId, item) { return true; },
	remove: function (userId, item) { return true; }
});