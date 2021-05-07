const input = document.querySelector(".input_meal");
const btn = document.querySelector(".btn-search");


btn.addEventListener("click",getMeal);

function getMeal(e){
  e.preventDefault();
  input_value = input.value;
  document.getElementById("title").innerText = 'Công thức tìm kiếm từ:'+' '+input.value;
  fetchDataAPI(input_value);
}

//async đồng bộ đường dẫn
async function fetchDataAPI(input_value){
  //Khi đăng ký API Signup trong trang web api.edamam.com mục Applications
  app_id = '24270fcf';
  app_key = '9c8b546d8fefe29384d4e2e11755885e';
  baseURI = `https://api.edamam.com/search?q=${input_value}&app_id=${app_id}&app_key=${app_key}`;
  result = await fetch(baseURI);
  recipes = await result.json();
  console.log(recipes);
  createHTML(recipes.hits);
  //hits là key chứa các thông tin,những dữ liệu của món ăn
}

//data ở đây chính là hits
function createHTML(data){
	console.log(data);
	showHtml = '';
	//result chỉ là biến tên nên dùng gì cũng đc
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