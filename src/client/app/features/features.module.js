(function () {
    'use strict';

    console.log('features module')

    angular.module('app.features', [
      'app.features.dashboard',
      'app.features.profile',
      'app.features.home',
      'app.features.login',
      'app.features.calendar',
    ]);

})();