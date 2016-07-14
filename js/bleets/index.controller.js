"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetIndexController", [
    "BleetFactory",
    "$stateParams",
    "$state",
    BleetIndexControllerFunction
  ]);

  function BleetIndexControllerFunction(BleetFactory, $stateParams, $state){

    this.bleets = BleetFactory.query();
    this.destroy = function(bleet){
      bleet.$delete(bleet).then(function(){

        $state.reload();
      })
    }
  }
}());
