var restAdmin = angular.module('restAdmin', ['ng-admin']);
restAdmin.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('Rest Admin')
      .baseApiUrl('http://127.0.0.1:8000/'); // main API endpoint

    var group = nga.entity('groups').identifier(nga.field('url')).url(function(entityName, viewType, identifierValue, identifierName) {
        return 'groups/'; // Can be absolute or relative
    });
    var groupFields = [
        nga.field('name')
    ]
    group.listView().fields(groupFields);
    group.creationView().fields(groupFields);
    admin.addEntity(group);

    var user = nga.entity('users').identifier(nga.field('url')).url(function(entityName, viewType, identifierValue, identifierName) {
        return 'users/'; // Can be absolute or relative
    });
    var userFields = [
        nga.field('username'),
        nga.field('email'),
    ]
    user.listView().fields(userFields);
    user.creationView().fields(userFields);
    admin.addEntity(user);

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);

