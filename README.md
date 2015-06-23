# Sortably

[![Build Status](https://travis-ci.org/alcarus/sortably.svg?branch=master&style=flat-square)](https://travis-ci.org/alcarus/sortably)
[![License Badge](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/alcarus/sortably/blob/master/LICENSE)

A simple meteor sortable package that makes a list drag-and-drop sortable. Inspired by [Sortable](https://github.com/RubaXa/Sortable/tree/master/meteor) by [RubaXa](https://github.com/RubaXa) and [Sortable Lists in Meteor using JQuery UI](http://blog.differential.com/sortable-lists-in-meteor-using-jquery-ui/) by Bruce Hubbard at Differential.

## Installation
```
meteor add alcarus:sortably
```


## Usage
Simply add the following in your `onRendered` callback.
```
// sortable_list.html
<template name="sortableList">
	<div id="sortable-list">
	{{#each items}}
		<div class="well well-lg">
			<i class="glyphicon glyphicon-menu-hamburger"></i>
			<span>{{description}}</span>
			<span class="badge">{{order}}</span>
		</div>
	{{/each}}
	</div>
</template>

// sortable_list.js
Template.sortableList.onRendered(function () {
	Sortably.create(this.$('#sortable-list'), 'collectionName');
});
```


## Dependencies
Depends on the following packages:
* [dburles:mongo-collection-instances](https://atmospherejs.com/dburles/mongo-collection-instances)
* [linto:jquery-ui](https://atmospherejs.com/linto/jquery-ui)


## Copyright
Copyright 2015 [Alcarus](https://www.alcarus.com), LLC.