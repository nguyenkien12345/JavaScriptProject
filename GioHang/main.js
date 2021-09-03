let productsElement = document.querySelector('.products');

let countElement = document.querySelector('.count');

let subTotalElement = document.querySelector('.subtotal span');     // Tổng tiền các sản phẩm chưa bao gồm Vat và Discount
let vatElement = document.querySelector('.vat span');               // Phí VAT
let totalElement = document.querySelector('.total span');           // Tổng tiền các sản phẩm bao gồm Vat và Discount

let inputPromotion = document.querySelector('#promo-code');         // Nhập mã Discount

let discount = document.querySelector('.discount');                 // Giảm giá discount
let discountElement = document.querySelector('.discount span');     // Hiển thị giảm giá discount

let btnPromotion = document.querySelector('.promotion button');     // Nút áp dụng giảm giá 


// Random id ngẫu nhiên trong khoảng 0 -> 100000
function randomId() {
    return Math.floor(Math.random() * 100000);    
}

// Chuyển số thành tiền VND 
function convertMoney(num) {
    return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Danh sách sản phẩm
let products = [
    {
        id: randomId(),
        name: 'Áo kiểu nữ cam đất phối cổ trắng dập ly',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 250000,
        image: 'https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550',
        count: 1,
    },
    {
        id: randomId(),
        name: 'Áo trắng bèo lé đen tay loe dễ thương',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 350000,
        image: 'https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550',
        count: 1,
    },
];

// Danh sách promotion code (Mã giảm giá)
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};

// Cập nhật số lượng sản phẩm
function updateTotalItem(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.count;
    }
    return total;
}

// Xoá sản phẩm trong giỏ hàng
function removeItem(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderUI(products);
}

// Thay đổi số lượng sản phẩm
function changeTotalProduct(id, e) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].count = Number(e.target.value);
        }
    }
    renderUI(products);
}

// Cập nhật tổng tiền
function updateTotalMoney(arr) {
    // Tính tổng tiền cart
    let totalMoney = 0;
    let discountMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        totalMoney += p.count * p.price;
    }

    // Có mã giảm giá hay không?
    // Mã giảm giá có hợp lệ hay không?
    let data = checkPromotion();

    if (data) {
        discountMoney = (totalMoney * data) / 100;
        discount.classList.remove('hide');
    } else {
        discount.classList.add('hide');
    }

    // Cập nhật tiền lên trên giao diện
    subTotalElement.innerText = convertMoney(totalMoney);
    vatElement.innerText = convertMoney(totalMoney * 0.05);
    discountElement.innerText = convertMoney(discountMoney);
    totalElement.innerText = convertMoney(totalMoney * 1.05 - discountMoney);
}

// Kiểm tra mã giảm giá
function checkPromotion() {
    let value = inputPromotion.value;
    if (promotionCode[value]) {
        return promotionCode[value];
    }
    return 0;
}

btnPromotion.addEventListener('click', function () {
    updateTotalMoney(products);
});

function renderUI(arr) {
    productsElement.innerHTML = '';

    if (arr.length == 0) {
        productsElement.insertAdjacentHTML(
            'afterbegin',
            '<li>Không có sản phẩm nào trong giỏ hàng</li>'
        );
        // ".option-container" là nơi hiển thị mã code giảm giá và tổng tiền đơn hàng, khi không có sản phẩm nào trong giỏ hàng thì những thành phần này không cần thiết phải hiển thị lên
        document.querySelector('.option-container').style.display = 'none';
        return;
    }

    else {
        for (let i = 0; i < arr.length; i++) {
            const p = arr[i];
            // Cập nhật số lượng sản phẩm trong cart
            countElement.innerText = `${updateTotalItem(arr)} items in the bag`;
            // Cập nhật tổng tiền
            updateTotalMoney(arr);
            productsElement.innerHTML += `
                <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${p.image}" alt="${p.name}">
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${p.name}</a></div>
                            <div class="description">
                                ${p.description}
                            </div>
                            <div class="price">${convertMoney(p.price)}</div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="number" class="quantity" step="1" value="${p.count}" onchange="changeTotalProduct(${p.id}, event)">
                        </div>
                        <div class="remove">
                            <span class="close" onclick="removeItem(${p.id})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
            `;
        }
    }
}

// HTML, CSS load xong thì mới thực hiện gọi function
window.onload = renderUI(products);

// Lý thuyết
// + Khi số lượng sản phẩm thay đổi mình sẽ gọi function changeTotalProduct() để cập nhật lại số lượng thông qua id, 
//   và tham số event trong hàm xử lý sự kiện sẽ giúp chúng ta có thể lấy được giá trị số lượng trong ô input