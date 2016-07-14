"use strict";

(function () {
  angular
  .module ("bleets")
  .controller("BleetNewController",[
    "BleetFactory",
    "$state",
    BleetNewControllerFunction
  ]);
  function BleetNewControllerFunction(BleetFactory, $state){
    this.bleet = new BleetFactory();
    this.create = function () {
      this.bleet.$save().then(function(response){
        $state.go("bleetIndex");

      })
    }
  }
}());
