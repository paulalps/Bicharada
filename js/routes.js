angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.bicharada', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bicharada.html',
        controller: 'bicharadaCtrl'
      }
    }
  })

  .state('menu.adoO', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adoO.html',
        controller: 'adoOCtrl'
      }
    }
  })

  .state('menu.vaquinhas', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vaquinhas.html',
        controller: 'vaquinhasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.adoODadosAnimal', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adoODadosAnimal.html',
        controller: 'adoODadosAnimalCtrl'
      }
    }
  })

  .state('menu.filtros', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filtros.html',
        controller: 'filtrosCtrl'
      }
    }
  })

  .state('menu.adoOGato', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adoOGato.html',
        controller: 'adoOGatoCtrl'
      }
    }
  })

  .state('menu.novaVaquinha', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/novaVaquinha.html',
        controller: 'novaVaquinhaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page2')


});