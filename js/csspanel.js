define([
		'jquery',
		"interact",
		"EventDispatcher",
		"angular"
		],
	
	function($,  interact, EventDispatcher, angular){
		
		var csspanel = function(p_$elem){
			EventDispatcher.call(this);
			
			this.$view 		= p_$elem;
			
			this.interactable = interact(this.$view[0])  
			  .draggable({
			  	restrict:'body',
			    // enable inertial throwing
			    inertia: false,
			    autoScroll: false,
			    // keep the element within the area of it's parent
			     onmove: dragMoveListener,
			  })
			  .resizable({
				    inertia: true,
				    autoScroll: true
				}
			);
			this.createModel = this.createModel.bind(this);
			return this;
			
		};
		
		csspanel.prototype								= Object.create(EventDispatcher.prototype);
		csspanel.prototype.constructor					= csspanel;
		
		 function dragMoveListener (event) {
			   // console.log(event.type, event.pageX, event.pageY);
			    var target = event.target,
			        // keep the dragged position in the data-x/data-y attributes
			        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
			
			    // translate the element
				// target.style.webkitTransform =
			    // target.style.transform =
			    // 'translate(' + x + 'px, ' + y + 'px)';
			
			target.style.left = x+'px';
			target.style.top = y+'px';
				
		    // update the posiion attributes
		    target.setAttribute('data-x', x);
		    target.setAttribute('data-y', y);
	 }
			  
	 csspanel.prototype.createModel		= function(oJson, elem){
	 	angular.module('csspanel', [])
	 	.controller('cssObj', ['$scope', function($scope){
	 		$scope.model = 	oJson;
	 		
	 		$scope.onChange 	= function(label , value){
	 			$("#sprite1").css(label, value);
	 		};
	 	}]);
	 	
	 //	angular.element(function() {
 			angular.bootstrap(elem, ['csspanel']);
 		//});
	 };
				
		return csspanel;
	});
