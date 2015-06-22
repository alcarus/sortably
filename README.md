# Sortably
A simple meteor sortable package that makes a list drag-and-drop sortable. Inspired by [Sortable](https://github.com/RubaXa/Sortable/tree/master/meteor) by [RubaXa](https://github.com/RubaXa) and [Sortable Lists in Meteor using JQuery UI](http://blog.differential.com/sortable-lists-in-meteor-using-jquery-ui/) by Bruce Hubbard at Differential.


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


## Copyright and License
Copyright 2015 [Alcarus](https://www.alcarus.com), LLC. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.