var restAdmin = angular.module('restAdmin', ['ng-admin']);
restAdmin.config(['NgAdminConfigurationProvider', function (nga) {
    var admin = nga.application('Rest Admin')
      .baseApiUrl('http://127.0.0.1:8000/');

    var group = nga.entity('groups').identifier(nga.field('url')).url(function(entityName, viewType, identifierValue, identifierName) {
        return 'groups/';
    });
    var groupFields = [
        nga.field('url'),
        nga.field('name')
    ]
    group.listView().fields(groupFields);
    group.creationView().fields(groupFields);
    admin.addEntity(group);

    var user = nga.entity('users').identifier(nga.field('url')).url(function(entityName, viewType, identifierValue, identifierName) {
        return 'users/';
    });
    var userFields = [
        nga.field('url'),
        nga.field('username'),
        nga.field('email'),
        nga.field('groups', 'json'),
    ]
    user.listView().fields(userFields);
    user.creationView().fields(userFields);
    admin.addEntity(user);

    nga.configure(admin);
}]);

