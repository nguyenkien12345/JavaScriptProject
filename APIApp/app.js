const input = document.querySelector(".input_meal");
const btn = document.querySelector(".btn-search");


btn.addEventListener("click",getMeal);

function getMeal(e){
  e.preventDefault();
  var input_value = input.value;
  document.getElementById("title").innerText = 'Công thức tìm kiếm từ:' + ' ' + input.value;
  fetchDataAPI(input_value);
}

async function fetchDataAPI(input_value){
  var app_id = '24270fcf';
  var app_key = '9c8b546d8fefe29384d4e2e11755885e';
  baseURI = `https://api.edamam.com/search?q=${input_value}&app_id=${app_id}&app_key=${app_key}`;
  var result = await fetch(baseURI);
  var recipes = await result.json();
  createHTML(recipes.hits);
}

function createHTML(data){
	console.log(data);
	var showHtml = '';
	data.map(result => {
		showHtml+= `<li>
					<img width="100%" src="${result.recipe.image}">
					<p>Tên món ăn : <span>${result.recipe.label}</span></p>
					<p>Calories : <span>${result.recipe.calories.toFixed(2)}</span></p>
					<p>Ăn kiêng : <span>${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</span></p>
					<p>Tốt cho sức khỏe : <span>${result.recipe.healthLabels}</span></p>
					<a href="${result.recipe.url}" target="_blank" class="btn btn-sm btn-primary">View Recipe</a>
				</li>`;
	})
	document.querySelector(".li_recipe").innerHTML = showHtml;
}

//toFixed(2) Làm tròn 2 kí tự
//target="_blank" mở cửa sổ mới