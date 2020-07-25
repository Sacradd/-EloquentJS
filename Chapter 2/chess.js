// --ШАХМАТНАЯ ДОСКА--

		var row = 8;
		var col = 8;

		for(var i = 0;i < row; i++){
			var str = "";
			if(i % 2 == 0){
				for(var j = 0; j < col; j++){
					if(j % 2 != 0){
						str += " ";
					} else {
						str += "#";
					}
				}
			} else {
				for(var j = 0; j < col; j++){
					if(j % 2 != 0){
						str += "#";
					} else {
						str += " ";
					}
				}
			}
			console.log(str);
		} 