var table = "";

Object.keys(products.items).forEach(function(key) {
    var element = document.createElement('div');
    element.innerHTML = "<button type=\"button\" onclick=\"add(" + key + ")\">"+products.items[key].name+"</button> ";
    document.getElementById('main').appendChild(element);
});

function calc(){
  sum = 0;
    
  Object.keys(products.items).forEach(function(key) {
	sum = sum + (products.items[key].cost * products.items[key].amount);
  });

  var element = document.getElementById("sum");
  element.innerHTML =  "Summe: " + sum + " SFr.";
}

function add(key){
	table = "";
	products.items[key].amount = products.items[key].amount + 1;
	console.log(products.items[key].amount);
	Object.keys(products.items).forEach(function(key) {
		table = table + "<tr>" + products.items[key].name + " " + products.items[key].amount + "</tr><br>";
	});
	var element = document.getElementById("sumTable");
	element.innerHTML =  table;
	
	calc();
}

			
