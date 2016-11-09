$( document ).ready(function() {
	$('#savepngbtn').click(function(){
	
		var svg=$("#efren_demo").html();
		var sv=$.trim(svg);
		$("#input").val(sv);
			renderCustom();
			cont=false;

		setTimeout(function() {
			drawlImage();
		}, 1000);	
		
		setTimeout(function() {
			$("#input2").val($(".campimg").html());
			
			$(".botonir").css('display','block');
			/*var dataString =$('#input').val(); 				
				$.ajax({
					type: "POST",
					url: "/wp-content/themes/cb-modello/save.php",
					data: {nomsvg:dataString},
						
						success: function() {
							$('#input').val(); 
							}
				});*/
				
		}, 1500);
	});
	
	var grad=0;
	$(".campimg2 img").click(function(){
		grad=grad+90;
		$(this).css('-webkit-transform','rotate('+grad+'deg)');
		$(this).css('-moz-transform','rotate('+grad+'deg)');
		$(this).css('rotation',grad+'deg)');
	});
	
	
	$(".titcolor li").click(function(){
		$(".titcolor li").removeClass('active');
		$(this).addClass('active');
		$(".colors .color").slideUp();
		
		var idd=$(this).attr('id');		
		setTimeout(function() {
			$(".color."+idd).slideDown();
		}, 500);
		
		
	});
	

});

	function drawlImage() {
		$(".campimg2 img").each(function() {
			$(this).attr("src", $("#canvas canvas").get(0).toDataURL("image/png"));
		});
	}
	var overrideTextBox = false;
	var context;
	function bodyonload() {
		var examples = document.getElementById('examples');
		examples.onchange = function () {
			if (!examples.value) return;
			overrideTextBox = true; 
			render('../svgs/' + examples.value);
		};
		
		var issues = document.getElementById('issues');
		issues.onchange = function () {
			if (!issues.value) return;
			overrideTextBox = true; 
			render('../svgs/' + issues.value);
		};
	}
	function render(svg, width, height) {
		document.createElement('canvas')
		var c = document.createElement('canvas');		
		c.width = width || 500;
		c.height = height || 500;
		document.getElementById('canvas').innerHTML = '';
		document.getElementById('canvas').appendChild(c);
		if (typeof FlashCanvas != "undefined") {
			FlashCanvas.initElement(c);
		}
		canvg(c, svg, { log: true, renderCallback: function (dom) {
			if (typeof FlashCanvas != "undefined") {
				document.getElementById('svg').innerHTML = 'svg not supported';
			} else {
				var svg = (new XMLSerializer()).serializeToString(dom);
				
				if (overrideTextBox) {
					document.getElementById('input').value = svg;
					overrideTextBox = false;
				}
			}
		}});
	}
	function renderCustom() {
		render(document.getElementById('input').value,
			   document.getElementById('width').value,
			   document.getElementById('height').value);
	}
