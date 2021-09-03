        var manufactureList = {
            "Apple": ["Iphone 6", "Iphone 6 plus", "Iphone 7", "Iphone 7 plus", "IPhone X", "Iphone 12"],
            "Samsung": ["Galaxy Z", "Galaxy S", "Galaxy Note", "Galaxy M", "Galaxy A"],
            "Oppo" : ["OPPO A", "OPPO K", "OPPO F","OPPO R","OPPO Reno", "OPPO Find"]
        }

        var productList = []

        var manufactureTag = document.getElementById("manufacturer_name")
        for(var item in manufactureList){
            manufactureTag.innerHTML += `<option value='${item}'>${item}</option>`
        }

        function changeManufacture()
        {
            key = manufactureTag.value;
            categoryList = manufactureList[key];
            var categoryTag = document.getElementById("category_name");
            categoryTag.innerHTML = "";
            if(categoryList != null)
            {
                for(var i = 0; i < categoryList.length; i++)
                {
                    categoryTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]}</option>`
                }
            }
        }

        function updateTotalPrice()
        {
            var price = document.getElementById("price").value;
            var quantity = document.getElementById("quantity").value
            totalPrice = price * quantity;
            document.getElementById("total_price").value = totalPrice
        }

        var count = 0;
        function addProduct()
        {
            var index = document.getElementById("index").value
            var productName = document.getElementById("product_name").value
            var manufactureName = document.getElementById("manufacturer_name").value
            var categoryName = document.getElementById("category_name").value
            var price = document.getElementById("price").value
            var quantity = document.getElementById("quantity").value
            var totalPrice = document.getElementById("total_price").value

            var product = {
                'productName': productName,
                'manufactureName': manufactureName,
                'categoryName': categoryName,
                'price': price,
                'quantity': quantity,
                'totalPrice': totalPrice
            }

            //Cập nhật 
            if(index != ''){
                //gán giá trị mới
                productList[index] = product
                showProduct()
                return;
            }

            //Thêm mới
            productList.push(product);

            // ${count - 1} vì do index đang là 1 (ta bđ từ 0). 
            document.getElementById("result").innerHTML += ` <tr>
            <td>${count++}</td>
            <td>${productName}</td>
            <td>${manufactureName}</td>
            <td>${categoryName}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${totalPrice}</td>
            <td><button class="btn btn-warning" onclick="editProduct(${count - 1}})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="deleteProduct(${count - 1})">Delete</button></td>
        </tr>`;
        }

        function showProduct()
        {
            document.getElementById("result").innerHTML = ''
            for(var i = 0; i < productList.length; i++){
                document.getElementById("result").innerHTML += ` <tr>
                <td>${i+1}</td>
                <td>${productList[i].productName}</td>
                <td>${productList[i].manufactureName}</td>
                <td>${productList[i].categoryName}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].quantity}</td>
                <td>${productList[i].totalPrice}</td>
                <td><button class="btn btn-warning" onclick="editProduct(${i})">Edit</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;
            }
        }

        function deleteProduct(index)
        {
            productList.splice(index,1);
            showProduct();
        }

        function editProduct(index){
            var product = productList[index]
            document.getElementById('index').value = index
            document.getElementById('product_name').value = product.productName
            document.getElementById('manufacturer_name').value = product.manufactureName
            changeManufacture()
            document.getElementById('category_name').value = product.categoryName
            document.getElementById('price').value = product.price
            document.getElementById('quantity').value = product.quantity
            document.getElementById('total_price').value = product.totalPrice
        }