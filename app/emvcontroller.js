// Angular controller
// Connects to the card reader using node-java
// Uses a refresh interval to update the UI

'use strict';

var emvbrowser = angular.module('EMVexplorer', []);

emvbrowser.controller('EMVcontroller', ['$scope', '$http', '$interval', function ($scope, $http, $interval)
{
  $scope.cardcontents = [];
  $scope.cardstatus = "Initialised";
  $scope.cardstate = "info";
  $scope.readerid = "";
  $scope.cardlabel = "";

  $scope.reader = null;

  $scope.refresh = function()
  {
      if ($scope.reader !== null)
      {
          $scope.cardcontents = $scope.reader.getCardDataSync();
          $scope.cardstatus = $scope.reader.getStatusSync();
          $scope.cardstate = $scope.reader.getStateSync();
          $scope.cardlabel = $scope.reader.getCardlabelSync();
          $scope.readerid = $scope.reader.getReaderidSync();

      }
  };

  $(document).ready(function ()
  {
    // Use Java
    $scope.java = require('java');

    $scope.java.classpath.push(__dirname + "/java/javaemvreader-0.6.1-SNAPSHOT.jar");
    $scope.java.classpath.push(__dirname + "/java/emvExplorerEngine.jar");

    // Instantiate an EMVbrowser => Connect the reader
    $scope.reader = $scope.java.newInstanceSync("com.infraxis.emvexplorer.EMVbrowser");

    // Update the reader status 2x per second
    $interval(function() {
        $scope.refresh();
      }, 500);
  });

}]);
