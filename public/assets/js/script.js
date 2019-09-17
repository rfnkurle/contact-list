// add contact functionality


// filter contact by type functionality

// delete contact functionality
//stored

<script type="text/javascript">
		// Array holds all of the drinks available
		var drinkList = [
			"Coffee: $5",
			"Espresso: $7",
			"Cappuccino: $6",
			"Latte: $4",
			"Tea: $3",
			"Ice Coffee: $6",
			"Ice Espresso: $8",
			"Ice Latte: $6",
			"Ice Tea: $4"
		];

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
