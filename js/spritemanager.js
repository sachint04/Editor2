define([
		'jquery',
		'sprite'
	],function($, sprite){
	
	var __instance;
	
	var SpriteManager = function(){
		this.list =[];
	
	}
	
	SpriteManager.prototype.setModel 						= function(p_oPage){
	
	
	}
	
	SpriteManager.prototype.addSprite 						= function( target, options, grid){
		var $elem 		= $('<div class="sprite" id="sprite'+this.aSprites.length+'"></div>');
		var offset 		= options.left % this.grid.offset;
		options.left 	= options.left - offset; 
		var sprite 		= new Sprite($elem, this.$stage, {x:this.grid.offset, y:'Infinity' });
		$elem.css({"left":options.left+"px", "top":options.top+"px"}).attr({"data-x": options.left, "data-y": options.top});
		target.append($elem);
		sprite.init();
		this.list.push($elem);
	};
	
	SpriteManager.prototype.removeSprite 					= function(p_sprite){
	
	
	};
	
	SpriteManager.prototype.createSprite 					= function(p_sprite){
	
	
	};
	
	SpriteManager.prototype.createSpritesFromObj 			= function(obj, p_$container, options, grid){
		for(var sprite in obj){
			var id 			= obj[sprite]._id; 
			var $elem 		= p_$container.find("#"+ id).addClass("sprite");//$('<div class="sprite" id="sprite'+this.aSprites.length+'"></div>');
			var offset 		= options.left % this.grid.offset;
			options.left 	= options.left - offset; 
			var sprite 		= new Sprite($elem, p_$container, {x:this.grid.offset, y:'Infinity' });
			$elem.css({"left":options.left+"px", "top":options.top+"px"}).attr({"data-x": options.left, "data-y": options.top});
			p_$container.append($elem);
			sprite.init();
			this.list.push($elem);
		}
	
	};
	
	SpriteManager.prototype.getSpriteByViewId 				= function(id){
	
	};
	
	
	
	if(!__instance){
		__instance = new SpriteManager();
	}
	
	return __instance;
)