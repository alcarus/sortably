'use strict';

var packageName = 'alcarus:sortably';

Package.describe({
  name: packageName,
  version: '0.0.1',
  summary: 'Sortably: turn a list into a drag-and-drop sortable list',
  git: 'https://github.com/alcarus/sortably.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('dburles:mongo-collection-instances@0.3.3');
  api.use('linto:jquery-ui@1.11.2');
  api.export('Sortably');
  api.addFiles('client/sortably.js', 'client');
  api.addFiles('server/sortably.js');
});

Package.onTest(function(api) {
  api.use(packageName);
  api.use('mongo');
  api.use('minimongo');
  api.use('tinytest', 'client');
  api.use('templating', 'client');
  api.use('practicalmeteor:munit@2.1.4');
  api.addFiles([
    'tests/sortably_tests.js',
    'tests/sortable_list.html',
    'tests/sortable_list.js'
  ], 'client');
  api.addFiles('tests/items.js');
});
