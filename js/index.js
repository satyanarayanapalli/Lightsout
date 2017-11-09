$(function()
{

var play_btn=$(".play_btn");

		var clear_color="rgb(0, 0, 0)";
		var count=0;
		var flag=false;
		var level_cnt=1;
		var interval;

		var hour1=0,hour2=0;
		var mnts_cnt1=0, mnts_cnt2=0;
		var seconds1 =0,seconds2=0;
		var total_time=0;


		var container=$('.game_container');
		var div1=$('#div1');
		var div2=$('#div2');
		var div3=$('#div3');
		var div4=$('#div4');
		var div5=$('#div5');
		var div6=$('#div6');
		var div7=$('#div7');
		var div8=$('#div8');
		var div9=$('#div9');
		var div10=$('#div10');
		var div11=$('#div11');
		var div12=$('#div12');
		var div13=$('#div13');
		var div14=$('#div14');
		var div15=$('#div15');
		var div16=$('#div16');
		var div17=$('#div17');
		var div18=$('#div18');
		var div19=$('#div19');
		var div20=$('#div20');
		var div21=$('#div21');
		var div22=$('#div22');
		var div23=$('#div23');
		var div24=$('#div24');
		var div25=$('#div25');

		var retry_btn=$('#retry');

		var restart_div=$('.restart_div');
	var restart_btn=$('.restart_btn');

	

		var color='';

		 play_btn.click(function()
      	{       
        interval=setInterval(updateDisplay,1000);
         $(".first_screen").hide();
		$(".game_screen").show();
        $(".final_container").hide();
      });


		div1.click(function()
		{
			
			var x =div1.css('backgroundColor');
			hexc(x,div1);
			x = div2.css('backgroundColor');
			hexc(x,div2);
			x = div6.css('backgroundColor');
			hexc(x,div6);
			check();
		});
		div2.click(function()
		{
			
			var x = div2.css('backgroundColor');
			hexc(x,div2);
			x = div1.css('backgroundColor');
			hexc(x,div1);
			x = div3.css('backgroundColor');
			hexc(x,div3);
			x = div7.css('backgroundColor');
			hexc(x,div7);
			check();

		});
		div3.click(function()
		{
			
			var x = div3.css('backgroundColor');
			hexc(x,div3);
			x = div2.css('backgroundColor');
			hexc(x,div2);
			x = div4.css('backgroundColor');
			hexc(x,div4);
			x = div8.css('backgroundColor');
			hexc(x,div8);
			check();

		});
		div4.click(function()
		{
			
			var x = div4.css('backgroundColor');
			hexc(x,div4);
			x = div3.css('backgroundColor');
			hexc(x,div3);
			x = div5.css('backgroundColor');
			hexc(x,div5);
			x = div9.css('backgroundColor');
			hexc(x,div9);
			check();

		});
		div5.click(function()
		{
			
			var x = div5.css('backgroundColor');
			hexc(x,div5);
			x = div4.css('backgroundColor');
			hexc(x,div4);
			x = div10.css('backgroundColor');
			hexc(x,div10);
			check();
			

		});
		div6.click(function()
		{
			
			var x = div6.css('backgroundColor');
			hexc(x,div6);
			x = div1.css('backgroundColor');
			hexc(x,div1);
			x = div11.css('backgroundColor');
			hexc(x,div11);
			x = div7.css('backgroundColor');
			hexc(x,div7);
			check();
			

		});
		div7.click(function()
		{
			
			var x = div7.css('backgroundColor');
			hexc(x,div7);
			x = div2.css('backgroundColor');
			hexc(x,div2);
			x = div8.css('backgroundColor');
			hexc(x,div8);
			x = div6.css('backgroundColor');
			hexc(x,div6);
			x = div12.css('backgroundColor');
			hexc(x,div12);
			check();
			

		});

		div8.click(function()
		{
			
			var x = div8.css('backgroundColor');
			hexc(x,div8);
			x = div7.css('backgroundColor');
			hexc(x,div7);
			x = div9.css('backgroundColor');
			hexc(x,div9);
			x = div3.css('backgroundColor');
			hexc(x,div3);
			x = div13.css('backgroundColor');
			hexc(x,div13);
			check();
			

		});
		div9.click(function()
		{
			
			var x = div9.css('backgroundColor');
			hexc(x,div9);
			x = div8.css('backgroundColor');
			hexc(x,div8);
			x = div10.css('backgroundColor');
			hexc(x,div10);
			x = div4.css('backgroundColor');
			hexc(x,div4);
			x = div14.css('backgroundColor');
			hexc(x,div14);
			check();
			

		});
		div10.click(function()
		{
			
			var x = div10.css('backgroundColor');
			hexc(x,div10);
			x = div9.css('backgroundColor');
			hexc(x,div9);
			x = div5.css('backgroundColor');
			hexc(x,div5);
			x = div15.css('backgroundColor');
			hexc(x,div15);
			check();
			
			
		});
		div11.click(function()
		{
			
			var x = div11.css('backgroundColor');
			hexc(x,div11);
			x = div12.css('backgroundColor');
			hexc(x,div12);
			x = div16.css('backgroundColor');
			hexc(x,div16);
			x = div6.css('backgroundColor');
			hexc(x,div6);
			check();
			
		});

		div12.click(function()
		{
			
			var x = div12.css('backgroundColor');
			hexc(x,div12);
			x = div11.css('backgroundColor');
			hexc(x,div11);
			x = div13.css('backgroundColor');
			hexc(x,div13);
			x = div7.css('backgroundColor');
			hexc(x,div7);
			x = div17.css('backgroundColor');
			hexc(x,div17);
			check();
			
		});


		div13.click(function()
		{
			
			var x = div13.css('backgroundColor');
			hexc(x,div13);
			x = div12.css('backgroundColor');
			hexc(x,div12);
			x = div14.css('backgroundColor');
			hexc(x,div14);
			x = div8.css('backgroundColor');
			hexc(x,div8);
			x = div18.css('backgroundColor');
			hexc(x,div18);
			check();
			
		});


		div14.click(function()
		{
			
			var x = div14.css('backgroundColor');
			hexc(x,div14);
			x = div15.css('backgroundColor');
			hexc(x,div15);
			x = div13.css('backgroundColor');
			hexc(x,div13);
			x = div9.css('backgroundColor');
			hexc(x,div9);
			x = div19.css('backgroundColor');
			hexc(x,div19);
			check();
			
		});



		div15.click(function()
		{
			
			var x = div15.css('backgroundColor');
			hexc(x,div15);
			x = div10.css('backgroundColor');
			hexc(x,div10);
			x = div14.css('backgroundColor');
			hexc(x,div14);
			x = div20.css('backgroundColor');
			hexc(x,div20);
			check();
			
		});


		div16.click(function()
		{
			
			var x = div16.css('backgroundColor');
			hexc(x,div16);
			x = div17.css('backgroundColor');
			hexc(x,div17);
			x = div11.css('backgroundColor');
			hexc(x,div11);
			x = div21.css('backgroundColor');
			hexc(x,div21);
			check();
			
		});



		div17.click(function()
		{
			
			var x = div17.css('backgroundColor');
			hexc(x,div17);
			x = div16.css('backgroundColor');
			hexc(x,div16);
			x = div18.css('backgroundColor');
			hexc(x,div18);
			x = div12.css('backgroundColor');
			hexc(x,div12);
			x = div22.css('backgroundColor');
			hexc(x,div22);
			check();
			
		});



		div18.click(function()
		{
			
			var x = div18.css('backgroundColor');
			hexc(x,div18);
			x = div17.css('backgroundColor');
			hexc(x,div17);
			x = div19.css('backgroundColor');
			hexc(x,div19);
			x = div23.css('backgroundColor');
			hexc(x,div23);
			x = div13.css('backgroundColor');
			hexc(x,div13);
			check();
			
		});



		div19.click(function()
		{
			
			var x = div19.css('backgroundColor');
			hexc(x,div19);
			x = div18.css('backgroundColor');
			hexc(x,div18);
			x = div20.css('backgroundColor');
			hexc(x,div20);
			x = div24.css('backgroundColor');
			hexc(x,div24);
			x = div14.css('backgroundColor');
			hexc(x,div14);
			check();
			
		});


		div20.click(function()
		{
			
			var x = div20.css('backgroundColor');
			hexc(x,div20);
			x = div15.css('backgroundColor');
			hexc(x,div15);
			x = div19.css('backgroundColor');
			hexc(x,div19);
			x = div25.css('backgroundColor');
			hexc(x,div25);
			check();
			
		});


		div21.click(function()
		{
			
			var x = div21.css('backgroundColor');
			hexc(x,div21);
			x = div22.css('backgroundColor');
			hexc(x,div22);
			x = div16.css('backgroundColor');
			hexc(x,div16);
			check();
			
			
		});


		div22.click(function()
		{
			
			var x = div22.css('backgroundColor');
			hexc(x,div22);
			x = div21.css('backgroundColor');
			hexc(x,div21);
			x = div23.css('backgroundColor');
			hexc(x,div23);
			x = div17.css('backgroundColor');
			hexc(x,div17);
			check();
			
		});


		div23.click(function()
		{
			
			var x = div23.css('backgroundColor');
			hexc(x,div23);
			x = div22.css('backgroundColor');
			hexc(x,div22);
			x = div24.css('backgroundColor');
			hexc(x,div24);
			x = div18.css('backgroundColor');
			hexc(x,div18);
			check();
			
		});


		div24.click(function()
		{
			
			var x = div24.css('backgroundColor');
			hexc(x,div24);
			x = div25.css('backgroundColor');
			hexc(x,div25);
			x = div23.css('backgroundColor');
			hexc(x,div23);
			x = div19.css('backgroundColor');
			hexc(x,div19);
			check();
			
		});


		div25.click(function()
		{
			
			var x = div25.css('backgroundColor');
			hexc(x,div25);
			x = div24.css('backgroundColor');
			hexc(x,div24);
			x = div20.css('backgroundColor');
			hexc(x,div20);
			check();
			
			
		});

		retry_btn.click(function()
      {
        location.reload();
      });

		function check()
		{
			count=0;
			if(flag)
			{
				
				$('.divs').each(function() {
    			if($(this).css('backgroundColor')==clear_color)
    			{
    				//alert("yes");
    				//alert(flag);
    				count++;
    				console.log("count "+count);

    				
    				if(count==25)
    				{
    					//alert("you won!");
    					clearInterval(interval);
    					//restart_div.slideDown();
						//restart_btn.focus();
    					flag=false;
    					count=0;
    					if(level_cnt==5)
    					{
    						
						  $(".first_screen").hide();
       					  $(".game_screen").hide();
                          $(".final_container").show();
                          $("#go_score").text(total_time);
      						

    						level_cnt=0;

    					}
    					else
    					{
    						restart_div.slideDown();
						restart_btn.focus();
    						$(".small_text").text("Click for next level ");
    					}
    				}
    			}
    			else
    			{
    				//alert($(this.id).css('backgroundColor'))
    				//alert("no");
    				count=0;
    				//console.log("count "+count);
    			}
				});
			}
			else
			{
				flag=true;
			}

			
			
		}


		restart_btn.click(function()
		{
			//location.reload();
			level_cnt++;
			restart_div.slideUp();
			
			
				$(".preload").show();
			var preload=document.getElementById("preload");
			
			var loading=0;
			var id=setInterval(frame,64);

			function frame()
			{
				if(loading==100)
				{
					clearInterval(id);
					//window.open("welcome.html","_self");
					if(level_cnt==6)
					{
						$(".preload1").hide();
					}
						else
					{
						$(".preload").hide();
					}
					
					

						if(level_cnt==1)
		 				{
		 					firstLevel();
		 				}
		 				else if(level_cnt==2)
    					{
    						secondLevel();	
    				
    					}
    					else if(level_cnt==3)
    					{
    						
    						thirdLevel();
    					}
    					else if(level_cnt==4)
    					{
    						
    						fourthLevel();
    					}
    					else if(level_cnt==5)
    					{
    						level_cnt=5;
    						fifthLevel();
    					}
					

					 interval=setInterval(updateDisplay,1000);

				}
				else
				{
					loading=loading+1;
					if(loading==90)
					{
						preload.style.animation="fadeout 1s ease";
						preload1.style.animation="fadeout 1s ease";
					}
				}
			}
		});

function firstLevel()
{
	$('.divs').each(function() {
    					var ids=this.id;
    					if(ids=="div1" || ids=="div2" || ids=="div6" ||ids=="div18" || ids=="div19" || ids=="div20" ||ids=="div14" || ids=="div24")
    					{
    						$(this).css("background-color", "#FFFF66");
    						//$(this).css("background-color", "#000000");
    					}
    					else
    					{
    						$(this).css("background-color", "#000000");
    					}
    					
    				});
}

function secondLevel()
{
	$('.divs').each(function() {
    					var ids=this.id;
    					/*if(ids=="div1"||ids=="div7"||ids=="div13"||ids=="div19"||ids=="div25")*/
    					if(ids=="div2"||ids=="div7"||ids=="div6"||ids=="div13"||ids=="div19"||ids=="div25")
    					{
    						$(this).css("background-color", "#FFFF66");
    					}
    					else
    					{
    						$(this).css("background-color", "#000000");
    					}
    					});
}
function thirdLevel()
{
	$('.divs').each(function() {
    					var ids=this.id;
    					if(ids=="div8"|| ids=="div10"||ids=="div12"||ids=="div13"||ids=="div14"||ids=="div15" ||ids=="div19" ||ids=="div24")

    					{
    						$(this).css("background-color", "#FFFF66");
    					}
    					else
    					{
    						$(this).css("background-color", "#000000");
    					}
    					
    				});
}
function fourthLevel()
{
	$('.divs').each(function() {
    					var ids=this.id;
    					if(ids=="div11"|| ids=="div13"||ids=="div15")
    					{
    						$(this).css("background-color", "#FFFF66");
    					}
    					else
    					{
    						$(this).css("background-color", "#000000");
    					}
    					
    				});
}

function fifthLevel()
{
	$('.divs').each(function() {
    					var ids=this.id;
    					if(ids=="div1"|| ids=="div2"||ids=="div3"||ids=="div4"||ids=="div6"||ids=="div10"||ids=="div11" ||ids=="div15" ||ids=="div16"||ids=="div20"||ids=="div21"||ids=="div22"||ids=="div23"||ids=="div24")
    					{
    						$(this).css("background-color", "#FFFF66");
    					}
    					else
    					{
    						$(this).css("background-color", "#000000");
    					}
    					
    				});
}
	
		function hexc(colorval,$div) 
		{
    		var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    		delete(parts[0]);
    		for (var i = 1; i <= 3; ++i) 
    		{
        		parts[i] = parseInt(parts[i]).toString(16);
        		if (parts[i].length == 1) 
        			parts[i] = '0' + parts[i];
    		}
    		color = '#' + parts.join('');

    		if(color==="#000000")
			{
				 $div.css("background-color", "#FFFF66");
			}
			else
			{
				$div.css("background-color", "#000000");
			}

		}

		$(".restart").click(function()
		 {
		 	
		 	if(level_cnt==1)
		 	{
		 		firstLevel();
		 	}
		 	else if(level_cnt==2)
    			{
    				secondLevel();	
    				
    			}
    			else if(level_cnt==3)
    			{
    				thirdLevel();
    			}
    			else 
    			if(level_cnt==4)
    			{
    						
    				fourthLevel();
    			}
    			else if(level_cnt==5)
    			{
    						
    				fifthLevel();
    			}
		});

		

		

		function updateDisplay(){
  
    		seconds1++;
    		if(seconds1==10)
    			{
    				$('.seconds2').hide();
    			}
    		if(seconds1%60==0)
    		{
    			mnts_cnt1++;
    			seconds1=0;
    			$('.seconds2').show();

    			if(mnts_cnt1==10)
    			{
    				$('#mnts2').hide();
    			}

    			if(mnts_cnt1%60==0)
    			{
    				hour1++;
    				mnts_cnt1=0;
    				$('#mnts2').show();
    				$('#hours1').text(hour1);
    			}
    			$('#mnts1').text(mnts_cnt1);
    		}
     		$('.timer').find('.seconds1').text(seconds1);
     		total_time="0"+mnts_cnt1+":"+seconds1;
     	}




});