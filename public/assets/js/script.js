// add contact functionality


// filter contact by type functionality

// delete contact functionality
//stored



        // Vanilla JavaScript Way
        // =======================
		var drinkDivJS = document.getElementById("drink-options-js");

		for (var i = 0; i < drinkList.length; i++) {
			var newDrinkDivJS = document.createElement("div");
			newDrinkDivJS.textContent = drinkList[i];
			drinkDivJS.appendChild(newDrinkDivJS)
		}

        // jQuery Way
        // ===========
		var drinkDivJQ = $("#drink-options-jq");

		for (var i = 0; i < drinkList.length; i++) {
			var newDrinkDivJQ = $("<div>");
			newDrinkDivJQ.text(drinkList[i]);
			drinkDivJQ.append(newDrinkDivJQ);
        }

        // Streamlined jQuery Way with forEach Loop
        // =========================================
        drinkList.forEach(function(drink) {
            $("#drink-options-jq-streamlined").append("<div>" + drink + "</div>");
        })
        

	</script>
