$(function() {
	// Deck initialization
	$.deck('.slide');
	
	$('.code-demo').click(function(){
		$(this).next().fadeToggle();
	});
	
	function startSnowfall()
	{
		$(document).snowfall('clear');
		$(document).snowfall({flakeCount : 250,shadow : true, round : true,  minSize: 2, maxSize:6});
	}
	

	
	now.ready(function(){
		var $document = $(document);
		now.beginSnow = function(){
			startSnowfall();
		};
		now.gotoPage = function(page){
			$document.unbind('deck.change');
			$['deck']('go',page);
			$document.bind('deck.change',onPageChange);
		};
		
		$document.bind('deck.change',onPageChange);
		
		function onPageChange(e,from,to){
			now._changePage(to);
		}

		$(document).keydown(function(e){
			if(e.which === 76) {
				now.snowAll();
			}
		});
	});
});

