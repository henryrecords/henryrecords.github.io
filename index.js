function search() {
				var password = document.getElementById("search").value;
				/* if (password == "日记") {
             		window.open("https://henryrecords.github.io/world_R/directory/1_dairy/index.html");
				}
				else if (password == "备忘") {
					window.open("https://henryrecords.github.io/world_R/directory/2_record/index.html");
				}
				else if (password == "文学") {
             		window.open("https://henryrecords.github.io/world_R/directory/3_literature/index.html");
				}
				else if (password == "媒体") {
             		window.open("https://henryrecords.github.io/world_R/directory/4_media/index.html");
				}
				else if (password == "学术") {
             		window.open("https://henryrecords.github.io/world_R/directory/5_academic/index.html");
				}
				else if (password == "外交") {
             		window.open("https://henryrecords.github.io/world_R/directory/6_contact/index.html");
				}
				else if (password == "财务") {
             		window.open("https://henryrecords.github.io/world_R/directory/7_finance/index.html");
				} */
				if ((password == "how are you") || (password == "How are you") || (password == "How are you?") || (password == "how are you?")) {
             		document.getElementById('search').value = "I'm fine, thank you. And you?";
				}
				else if ((password == "what's the date") || (password == "What's the date") || (password == "what's the date?") || (password == "What's the date?")) {
             		document.getElementById('search').value = "Dec-06, 2021";
				}
				else if ((password == "what's your name") || (password == "What's your name") || (password == "what's your name?") || (password == "What's your name?")) {
             		document.getElementById('search').value = "Lord Search Bar.";
				}
				else if ((password == "see you") || (password == "See you") || (password == "see you.") || (password == "See you.")) {
             		document.getElementById('search').value = "Bye...";
					document.getElementById('index').classList.toggle('fadein');
				}
				else {
					document.getElementById('search').value = "暂无搜索结果";
				}
			}
