require.config({
	waitSeconds: 200,
    shim:{
		'jquery':{
			exports: 'jQuery'
		},
		'jqueryui':{
			exports: 'jqueryui',
			deps: ['jquery']
		},
		'contextMenu':{
			exports: 'jquerycontext',
			deps: ['jquery']
		},
		'jqueryposition':{
			exports: 'jqueryposition',
			deps: ['jquery']
		},
		'tinymce':{
			exports: 'tinymce',
			deps: ['jquery']
		},
		'punch':{
			exports: 'punch',
			deps: ['jquery']
		},
		'touch':{
			exports: 'touch',
			deps: ['jquery']
		},
		'angular':{
			exports:'angular'
		}
    },
    paths:{
        'jquery'				: 'libs/jquery-1.10.2',
         'jqueryui'     		: 'libs/jquery-ui-1.11.3.min',
         'contextMenu' 			: 'libs/jQuery-contextMenu-master/dist/jquery.contextMenu.min',
         'jqueryposition'		: 'libs/jQuery-contextMenu-master/dist/jquery.ui.position.min',
        'punch'					: 'libs/jquery.ui.touch-punch.min',
        'touch'					: 'libs/jqueryui_touch',
        'interact'				: 'libs/interact-mini-1-2-6',
        'tinymce'				: 'libs/tinymce/tinymce.min',
        'angular'				: 'libs/angular.min'
        }
});

//  Protect against IE8 not having developer console open.
var console = window.console || {
    "log": function () {
    },
    "error": function () {
    },
    "trace": function () {
    }
};

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
};
var $csspanel;
define([
		"jquery",
		"timeline",	
		],
		function($, Timeline){
			var timeline = new Timeline($(".timlineview")); 
			var obj = {
				timesec: 8,
				fps: 25,
				currentframe:1
			};
			
			$.getJSON("js/cssprops.json",function(data){
					//$csspanel 	= $('<div class="css-panel"><h4>CSS property</h4></div>');
					//$('body').append($csspanel);
					// for(var param in data){
						// $param = $('<div class="style"><label>'+param+'</label><input type="text">'+ data[param]+'</input></div>');
						// $csspanel.append($param);
					// }
					timeline.init(timeline, data);
				}).fail(function() {
  					console.log('json load failed');
  				});
			
		}
);
