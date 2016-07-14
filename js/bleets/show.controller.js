(function() {
  angular
  .module ("bleets")
  .controller("BleetShowController",[
    "BleetFactory",
    "$stateParams",
    "$state",
    BleetShowControllerFunction
  ]);
  function BleetShowControllerFunction(BleetFactory, $stateParams, $state){
    this.bleet = BleetFactory.get({id: $stateParams.id});

    this.update = function(){
      this.bleet.$update({id: $stateParams.id}).then(function(update){
        console.log(update)
        $state.go("bleetIndex")
      })
    }

  }
}());
