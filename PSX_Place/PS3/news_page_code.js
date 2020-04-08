document.write('<!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <title>HAN Toolbox Unofficial - PSX-Place news</title> <link href="https://raw.githubusercontent.com/DADi590/Console-news-on-consoles/master/PSX_Place/PS3/ERROR.png" rel="icon" type="image/x-icon"/> <style> html { height: 100%; width: 100%; margin: 0 0; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; max-width: 100%; left: 100%; overflow-x: hidden; position: relative; } body { height: 100%; width: 100%; margin: 0 0; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; max-width: 100%; left: -100%; overflow-x: hidden; position: relative; } a { color: inherit; text-decoration: none; } .disable_select { -o-user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: default; } .inline { float:left; } #everything { margin-left:8px; margin-right:8px; margin-top:100px; height: 85%; position: absolute; } #title_div { font-family: arial; font-size: 25px; font-weight: bold; background-color: red; margin: 0; padding: 0; left: 0; right: 0; color: white; position: fixed; z-index: 1; } #title { display: inline-block; margin-right: auto; margin-top: 15px; margin-left: 15px; margin-bottom: 15px; text-align: left; z-index: 2; } #date_time { display: inline-block; margin-left: auto; margin-top: 15px; margin-right: 15px; margin-bottom: 15px; float: right; z-index: 2; } #footer_div { font-family: arial; font-size: 15px; color: black; background-color: #07b315; margin: 0; padding: 0; bottom: 0; left: 0; right: 0; position: fixed; z-index: 1; } #footer_div > div { display: inline-block; margin-top: 10px; margin-bottom: 10px; float: left; z-index: 2; } #ofw_version { margin-left: 10px; } .article_shape { background-color: lightgrey; -o-border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px; -ms-border-radius: 10px; border-radius: 10px; border: 5px solid orange; -o-box-shadow: 5px 10px 10px; -webkit-box-shadow: 5px 10px; -moz-box-shadow: 5px 10px 10px; -ms-box-shadow: 5px 10px 10px; box-shadow: 5px 10px 10px; } .articles { margin-bottom: 10px; max-width: 750px; height: 500px; margin-right: 1%; margin-left: 1%; float: left; position: relative; } #news_popup { visibility: hidden; width: 75%; height: auto; left: 0; right: 0; margin: auto auto; position:fixed; } .article_titles { text-align: center; color: white; background-color: black; text-decoration: none; padding: 10px; } .continue_to_threads { background-color: orange; padding: 15px; } .continue_to_threads:hover { text-decoration: underline; background-color: darkorange; } .continue_to_threads:active { background-color: orangered; } .descriptions_plus_pictures { text-align: center; } .descriptions { width: 95%; margin: auto auto; } .show_description { position: absolute; bottom: 25px; left: 37%; margin-left: -50%; display: table; margin: 0 auto; } .hide_description { left: 35%; margin-left: -50%; display: table; margin: 0 auto; } .pictures { width: 90%; max-width: 500px; max-height: 300px; } </style> </head> <body> <div id="title_div"> <div id="title" class="disable_select">PSX-Place news</div> <div id="date_time" class="disable_select">Error obtaining date and time</div> </div> <div id="everything" class="disable_select" style="text-align: center;"> <div id="news_popup" class= "article_shape"></div> </div> <div id="footer_div"> <div id="ofw_version" class="disable_select">Current OFW version: Error</div> <div class="inline">&nbsp; / &nbsp;</div> <div id="hfw_version" class="disable_select">Current HFW version: Error</div> </div> </body> </html>');

enable_date_time_checker();

		var documentElement = document.documentElement;

		openFullscreen(documentElement);

		var article_titles = [], descriptions = [], authors = [], dates = [], links = [];

		var opened_description = -1;

		var current_y_scroll_position = 0;

		var response_text = "3234_NONE";

		var xml_URL = "https://raw.githubusercontent.com/DADi590/Console-news-on-consoles/master/PSX_Place/PS3/whats_new.xml";

		//FALTA SÓ PORES ISTO A IR BUSCAR CÓDIGO DE UM SÍTIO QUALQUER!!!!!!!!!!!! Põe um ficheiro no GitHub com uma string enorme pronta para a PS3 ler e põe no eval()
		//E põe uma verificação. Caso o repositório deixe de existir (ou o GitHub), usa o código que vier na versão da toolbox.

		//article_titles.push("The Power Supply (vol. I) Featuring a chat with developer deank (creator of multiMAN / webMAN & ...)");
		//descriptions.push(`<img src="https://www.psx-place.com/data/attachments/22/22253-83907afe9877d34439be7388b1802db1.jpg"><br><br><div style="text-align: center">//In this inaugural edition of<a href="https://www.psx-place.com/threads///introducing-the-power-supply-a-new-developer-interview-series-1st-interview-launching-soon.28144/" class="internalLink"> <b><span style="color: #006600">The //Power Supply </span></b></a><b>(<span style="font-family: 'Courier New'">A new developer interview series</span>)</b> we have the pleasure to interview one of //the legendary developer's of the PlayStation Homebrew Community. A developer whom has contributed on a variety of projects and been a master of some of his own . //Very well known in the PS3 scene, this dev is responsible for projects that include the AIO Homebrew known as <span style="color: #006600"><b>multiMAN</b><///span>, or the popular ps3 plugin known as<span style="color: #006600"> <b>webMAN </b></span><span style="font-size: 12px">(not to be confused with a forked //version called webMAN MOD by aldostools). </span>Then later on the emergence of the <span style="color: #006600"><b>sMAN</b></span> plugin can be from only one //person and that developer is of course <span style="color: #0000b3"><b><a href="https://www.psx-place.com/members/26378/" class="username" data-user="26378, //@deank">@deank</a></b></span> . The developer has graciously given us some time for a Q/A interview to kick of this new series. Dean will give us a bit of //insight on himself, along with his development journey on the PS3 . Also, we have asked the developer if he still has plans for a multiMAN (PS4) release after a //small hint in the past that suggested the developer at least was contemplating the idea , Also, does Dean have any immediate plans for future development on the //PS3/4, We have these answers and more from himself in the discussion below, so lets dive into:.​</div> <br/><br/>`)
		//authors.push('STLcardsWS ' );
		//dates.push('Mon, 10 Feb 2020 17:07:21');
		//links.push('https://www.psx-place.com/threads/the-power-supply-vol-i-featuring-a-chat-with-developer-deank-creator-of-multiman-webman.28126/' );
		httpGet(xml_URL);

		enable_selected_article_checker();

		/////////////////////////////////
		// Popup the selected article
		var function_num = -1;
		var no_idea = document.getElementById('everything');
		try {
			no_idea.matches("no_idea");
			function_num = 0;
		} catch (err) {
			try {
				no_idea.webkitMatchesSelector("no_idea");
				function_num = 1;
			} catch (err) {
				try {
					no_idea.oMatchesSelector("no_idea");
					function_num = 2;
				} catch (err) {
					try {
						no_idea.msMatchesSelector("no_idea");
						function_num = 3;
					} catch (err) {
						try {
							no_idea.mozMatchesSelector("no_idea");
							function_num = 4;
						} catch (err) {
						}
					}
				}
			}
		}

		// Find the right method, call on correct element
		function openFullscreen(element) {
			if (element.requestFullScreen) {
				element.requestFullScreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
			} else if (element.msRequestFullScreen) {
				element.msRequestFullScreen();
			} else if (element.oRequestFullScreen) {
				element.oRequestFullScreen();
			} else {
				window.resizeTo(1920,1080);
				//window.resizeTo(9999,9999);//Resize to maximum supported resolution
			}
		}

		function httpGet(url){
			var no_connection_warned = false;
			var xmlhttp;
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200) {
					response_text = xmlhttp.responseText;
					parse_xml(response_text);
					process_page();
				} else if (xmlhttp.readyState==4 && xmlhttp.status == 0) {
					if (!no_connection_warned) {
						alert("No Internet connection detected. The news feed could not be downloaded.");
						no_connection_warned = true;
					}
				}
			};
			try {
				xmlhttp.open("GET",url, true);
				xmlhttp.send();
			} catch (err) {
				alert("This browser seems not to be compatible. Error: "+err);
			}
		}

		function parse_xml(whats_new_xml){
			whats_new_xml = whats_new_xml.split("\n");
			var num = 2; // Não sei para que isto serve. Estava num = 0 e as notícias não apareciam todas (faltavam 2), então pus sempre maior que 1 (???)
			for (var i = 0; i < whats_new_xml.length; i++) {
				if (num > 1) {// APAGA ISTO QUANDO MUDARES PARA UM XML PRÓPRIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					if (whats_new_xml[i].indexOf("<desc>") != -1) {
						article_titles.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf(">")+1,whats_new_xml[i].indexOf("</desc>")));
					} else if (whats_new_xml[i].indexOf('<target type="u">') != -1) {
						links.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf(">")+1,whats_new_xml[i].indexOf('</target>')));
					} else if (whats_new_xml[i].indexOf("<dadi590_description>") != -1) {
						descriptions.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf(">")+1,whats_new_xml[i].indexOf("</dadi590_description>")));
					} else if (whats_new_xml[i].indexOf("<dadi590_creator>") != -1) {
						authors.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf(">")+1,whats_new_xml[i].indexOf("</dadi590_creator>")));
					} else if (whats_new_xml[i].indexOf(' lastm="') != -1 && whats_new_xml[i].indexOf('" until="') != -1) {
						dates.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf('lastm="')+7,whats_new_xml[i].indexOf('.000Z" until="')));
					}
					/*} else if (whats_new_xml[i].indexOf("<pubDate>") != -1) {
						dates.push(whats_new_xml[i].substring(whats_new_xml[i].indexOf(">")+1,whats_new_xml[i].indexOf("</pubDate>")-6));
					}*/
				} else if (whats_new_xml[i].indexOf("<desc>") != -1) {
					num+=1;
				}
			}
		}

		function create_article(main_div, article_num) {
			var childElement = document.createElement('h3');
			childElement.setAttribute("class", "article_titles");
			var appendChildElement = main_div.appendChild(childElement);
			appendChildElement.innerHTML = article_titles[article_num];//'<a href="'+links[article_num]+'" target="_blank">'+article_titles[article_num]+'</a>';

			childElement = document.createElement('p');
			appendChildElement = main_div.appendChild(childElement);
			appendChildElement.innerHTML = "Posted by "+authors[article_num]+" on "+dates[article_num];

			childElement = document.createElement('div');
			childElement.setAttribute("class", "descriptions_plus_pictures");
			appendChildElement = main_div.appendChild(childElement);

			var new_description = "";
			var modifiers_added = false;
			for (var e = 0; e < descriptions[article_num].length ; e++) {
				if (!modifiers_added && descriptions[article_num][e]==">") {
					new_description+=' class="pictures"><p class="disable_select"><button id="show_description'+(article_num+1)+'" class="show_description" onclick="javascript:show_description('+(article_num+1)+')"><b>Show description</b></button><button id="hide_description'+(article_num+1)+'" class="hide_description" onclick="javascript:hide_description('+(article_num+1)+')" style="display: none;"><b>Hide description</b></button></p><div id="description'+(article_num+1)+'" class="descriptions" style="display: none;">';
					modifiers_added = true;
				} else {
					new_description+=descriptions[article_num][e];
				}
			}
			new_description+="</div>";
			appendChildElement.innerHTML = new_description;

			childElement = document.createElement('p');
			appendChildElement = main_div.appendChild(childElement);
			//childElement.setAttribute("class", 'more'+(article_num+1));
			childElement.setAttribute("style", 'display:none;');
			appendChildElement.innerHTML = "Link to the thread: "+links[article_num];

			childElement = document.createElement('p');
			//childElement.setAttribute("class", 'continue_to_threads disable_select more'+(article_num+1));
			childElement.setAttribute("style", 'display:none;');
			appendChildElement = main_div.appendChild(childElement);
			appendChildElement.innerHTML = '<a href="'+links[article_num]+'" target="_blank">'+"Continue to the thread"+'</a>';
		}
		
		function process_page() {
			var everything = document.getElementById('everything');
			var rows_separator;
			var articles_per_row_final;

			var max_articles_per_row = 3;
			var min_articles_per_row = 1;

			var min_article_width = 400;
			var max_article_width = 750;

			var body_width = document.body.clientWidth;

			var possible_total_width = 0;

			var articles_per_row = 0;
			var article_width = 0;
			for (articles_per_row = max_articles_per_row; articles_per_row >= min_articles_per_row; articles_per_row--) {
				for (article_width = max_article_width; article_width >= 0; article_width--) {
					possible_total_width = articles_per_row * article_width;
					//console.log(possible_total_width)
					if (possible_total_width < body_width-50) {
						if (possible_total_width >= min_article_width) {
							stop = true;
							break;
						}
					}
				}
				if (stop) {
					break;
				}
			}

			//alert(body_width+" / "+possible_total_width+" / "+articles_per_row+" / "+article_width);

			articles_per_row_final = articles_per_row;
			article_width_final = article_width;

			//alert(min_article_width);
			if (articles_per_row_final < 1) {
				articles_per_row_final = 1;
			} else if (articles_per_row_final > 4) {
				articles_per_row_final = 4;
			}

			//Determine the biggest size for the articles in order to fit as much as possible in the row according with the page size
			for (var i = min_article_width; i <= max_article_width; i++) {
				if (parseInt(body_width/i) < articles_per_row_final) {
					i--;
					articles_per_row_final = parseInt(body_width/i);
					break;
				}
			}

			if (articles_per_row_final < 1) {
				articles_per_row_final = 1;
			} else if (articles_per_row_final > 3) {
				articles_per_row_final = 3;
			}

			var article_width_final = 100/articles_per_row_final - 5;
			if (article_width_final > 60) {
				article_width_final = 60;
			} else if (article_width_final < 20) {
				article_width_final = 20;
			}
			article_width_final += "%";
			//alert(i+" / "+articles_per_row_final+" / "+article_width_final);

			articles_in_last_the_row = 0;

			for (var i = 0; i < article_titles.length; i++) {
				/*if ((i+articles_per_row_final)%articles_per_row_final==0) {
					var rows_separator_create = document.createElement("div");
					rows_separator_create.setAttribute("style", "display: inline-block; min-width: 51%; margin: auto auto;")//51% so 2 or more rows can't be on the same line, since both use 51% of the page (51%+51% = 102% > 100%)
					rows_separator = everything.appendChild(rows_separator_create);
					
					articles_in_last_the_row=0;
				}*/

				var article_create = document.createElement("div");
				article_create.setAttribute("class", "article_shape articles");
				var article = everything.appendChild(article_create);

				create_article(article, i);

				articles_in_last_the_row+=1;
			}

			if (articles_in_last_the_row > 0 && articles_in_last_the_row < 3) {
				fill_rest_of_articles(articles_in_last_the_row);
			}

			document.querySelector('.articles').style.width = article_width_final;
			var articles = document.getElementsByClassName("articles");
			for (var i = 0; i < articles.length; i++) {
				articles[i].style.width=article_width_final;
			}

			setBodyScrollTop(current_y_scroll_position);

			function fill_rest_of_articles(articles_in_last_the_row) {
				for (var i = 0; i < articles_per_row_final-articles_in_last_the_row; i++) {
					var article_create = document.createElement("div");
					article_create.setAttribute("class", "article_shape articles");
					article_create.setAttribute("style", "visibility: hidden; height: 0px;");
					var article = rows_separator.appendChild(article_create);

					var childElement = document.createElement('h3');
					childElement.setAttribute("class", "article_titles");
					var appendChildElement = article.appendChild(childElement);
					appendChildElement.innerHTML = '3234_FILL_ACTICLES_SPACE This is solely to fill the rest of the space / This is solely to fill the rest of the space';
				}
			}
		}
		
		function show_description(description_number) {
			var articles = document.getElementsByClassName("articles");
			how_many_real_articles = 0;
			for (var i = 0; i < articles.length; i++) {
				if (articles[i].innerHTML.indexOf("3234_FILL_ACTICLES_SPACE") == -1) {//The invisible articles that fill the space can't appear
					how_many_real_articles++;
				}
			}
			for (var i = 0; i < how_many_real_articles; i++) {
				if (i!=how_many_real_articles-1) {
					articles[i].style.visibility = "hidden";
				}
			}

			current_y_scroll_position = getBodyScrollTop();
			document.getElementsByTagName('body')[0].style.overflowY = "hidden";

			var news_popup = document.getElementById('news_popup');

			create_article(news_popup, description_number-1);

			document.getElementById('description'+description_number).style.display = "block";
			document.getElementById('show_description'+description_number).style.display = "none";
			document.getElementById('hide_description'+description_number).style.display = "block";

			news_popup.style.visibility = "visible";

			opened_description = description_number;
		}
		function hide_description() {
			opened_description = -1;

			var news_popup = document.getElementById("news_popup");

			news_popup.style.visibility = "hidden";

			var articles = document.getElementsByClassName("articles");
			how_many_real_articles = 0;
			for (var i = 0; i < articles.length; i++) {
				if (articles[i].innerHTML.indexOf("3234_FILL_ACTICLES_SPACE") == -1) {//The invisible articles that fill the space can't appear
					how_many_real_articles++;
				}
			}
			for (var i = 0; i < how_many_real_articles; i++) {
				articles[i].style.visibility = "visible";
			}

			document.getElementsByTagName('body')[0].style.overflowY = "visible";
			setBodyScrollTop(current_y_scroll_position);
			document.getElementById("news_popup").innerHTML = "";
		}

		// Global functions

		/////////////////////////////////
		// To reprocess the page layout everytime the zoom changes, so the grid is reprocessed
		window.onzoom = function(e) {
			// zoom event
		};
		// detect resize
		(function() {
			var oldresize = window.onresize;
			window.onresize = function(e) {
				var event = window.event || e;
				if(typeof(oldresize) === 'function' && !oldresize.call(window, event)) {
					return false;
				}
				if (typeof(window.onzoom) === 'function') {
					current_y_scroll_position = getBodyScrollTop();
					if (opened_description!=-1) {
						document.querySelector("#news_popup").innerHTML = "";
						show_description(opened_description);
					} else {
						if (response_text!="3234_NONE") {
							document.querySelector("#everything").innerHTML = "";
							process_page();
						}
					}
					//return window.onzoom.call(window, event);
				}
			}
		})();
		// To reprocess the page layout everytime the zoom changes, so the grid is reprocessed
		/////////////////////////////////

		/////////////////////////////////
		// Enable the date and time asynchronous checker
		function enable_date_time_checker() {
			const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var update_date_time = setInterval(function () {
				var now = new Date();
				var dd = now.getDate();
				var mm = now.getMonth();//String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = now.getFullYear();
				var HH = now.getHours();
				var MM = now.getMinutes();
				var ss = now.getSeconds();
				if (HH < 10) {
					HH = "0"+HH;
				}
				if (MM < 10) {
					MM = "0"+MM;
				}
				if (ss < 10) {
					ss = "0"+ss;
				}

				now = monthNames[mm] + ' ' + dd + ', ' + yyyy + " - " + HH + ":" + MM + ":" + ss;

				document.getElementById("date_time").innerHTML = now;
			}, 1000);
		}
		// Enable the date and time asynchronous checker
		/////////////////////////////////

		function enable_selected_article_checker() {
			var selected_article = -1;
			var articles = document.getElementsByClassName("articles");

			var default_box_shadow = "5px 10px 10px";
			var default_padding_left = "0px";
			var default_padding_right = "0px";

			var selected_box_shadow = "20px 10px 10px";
			var selected_padding_left = "10px";
			var selected_padding_right = "10px";

			var update_date_time = setInterval(function () {
				if (selected_article!=-1) {
					var continuar = false;
					if (function_num==0) {
						if (!articles[selected_article].matches(":hover")) {
							continuar = true;
						}
					} else if (function_num==1) {
						if (!articles[selected_article].webkitMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==2) {
						if (!articles[selected_article].oMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==3) {
						if (!articles[selected_article].msMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==4) {
						if (!articles[selected_article].mozMatchesSelector(":hover")) {
							continuar = true;
						}
					}
					if (continuar) {
						articles[selected_article].style.boxShadow = default_box_shadow;
						articles[selected_article].style.mozboxShadow = default_box_shadow;
						articles[selected_article].style.msboxShadow = default_box_shadow;
						articles[selected_article].style.webkitboxShadow = default_box_shadow;
						articles[selected_article].style.oboxShadow = default_box_shadow;
						articles[selected_article].style.paddingRight = default_padding_right;
						articles[selected_article].style.paddingLeft = default_padding_left;
						selected_article = -1;
					}
				}
				for (var i = 0; i < articles.length; i++) {
					//console.log(articles[i].matches(":hover"))
					var continuar = false;
					if (function_num==0) {
						if (articles[i].matches(":hover")) {
							continuar = true;
						}
					} else if (function_num==1) {
						if (articles[i].webkitMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==2) {
						if (articles[i].oMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==3) {
						if (articles[i].msMatchesSelector(":hover")) {
							continuar = true;
						}
					} else if (function_num==4) {
						if (articles[i].mozMatchesSelector(":hover")) {
							continuar = true;
						}
					}
					if (continuar) {
						articles[i].style.boxShadow = selected_box_shadow;
						articles[i].style.mozboxShadow = selected_box_shadow;
						articles[i].style.msboxShadow = selected_box_shadow;
						articles[i].style.webkitboxShadow = selected_box_shadow;
						articles[i].style.oboxShadow = selected_box_shadow;
						articles[i].style.paddingRight = selected_padding_right;
						articles[i].style.paddingLeft = selected_padding_left;
						selected_article = i;
						break;
					}
				}
			}, 500);
		}
		// Popup the selected article
		/////////////////////////////////

		/////////////////////////////////
		// Utilities
		function getBodyScrollTop() {
			const el = document.scrollingElement || document.documentElement;
			return el.scrollTop;
		}
		function setBodyScrollTop(value) {
			const el = document.scrollingElement || document.documentElement;
			return el.scrollTop = value;
		}
		// Utilities
		/////////////////////////////////