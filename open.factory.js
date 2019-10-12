( function ()
{
    'use strict';

    angular.module( 'openApp' )
        .factory( 'openFactory', openFactory );

    function openFactory($http) 
    {
        var service = {
            getScores: getScores,
            getWeeks: getWeeks,
            getAccomplishments: getAccomplishments,
            getTeams: getTeams,
            getAthletes: getAthletes
    };

    return service;

    function getScores()
    {
        var promise = $http.get(getURL('1'));
        return promise;
    }

    function getWeeks() {
        var promise = $http.get(getURL('2'));
        return promise;
    }

    function getAccomplishments() {
        var promise = $http.get(getURL('3'));
        return promise;
    }

    function getTeams() {
        var promise = $http.get(getURL('4'));
        return promise;
    }

    function getAthletes() {
        var promise = $http.get(getURL('5'));
        return promise;
    }

    function getURL(sheet)
    {
      var api;

      api = 'https://spreadsheets.google.com/feeds/list/1yZ1RneGb4E-DOKT8dvjDHws5_JANZRWvWXJKuRnxW5w/' + sheet + '/public/values?alt=json';
      return api;
    }
}
} )();