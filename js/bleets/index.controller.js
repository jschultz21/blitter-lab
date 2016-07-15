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

    this.like=function(bleet){
      console.log(bleet.likes)
      bleet.likes +=1;
      console.log("new likes=" + bleet.likes);
      bleet.$update(bleet).then(function(){
        $state.reload();
      })


    };
  }
}());
