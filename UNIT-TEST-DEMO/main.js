// Hàm kiểm tra số lẻ
export const isOddNumber = (number) => number % 2 !== 0;
// Hàm kiểm tra số chẵn
export const isEvenNumber = (number) => number % 2 === 0;


// Hàm đếm số lẻ
export const countOddNumbers = (numberList) => {
    if(!Array.isArray(numberList)) return 0;
    return numberList.filter((x) => x % 2 !== 0).length;
};
// Hàm đếm số chẵn
export const countEvenNumbers = (numberList) => {
    if(!Array.isArray(numberList)) return 0;
    return numberList.filter((x) => x % 2 === 0).length;
};


export class Caculator{
    // Hàm cộng
    Summation = (a, b) => { return a + b; }
    // Hàm trừ
    Subtraction = (a, b) => { return a - b; }
    // Hàm nhân
    Multiplication = (a, b) => { return a * b; }
    // Hàm chia
    Division = (a, b) => { return a / b; }
}

// Hàm kiểm tra năm nhuận
export const isLeapYear = (year) => {
    if(year % 400 === 0) return true;
    if(year % 4 === 0) return true;
    if(year % 100 === 0) return false; 
    return false;
}


// --------------------------------------------------------------------------------------------------------------------------------------------
// Phân biệt Black Box và White Box

// - Black Box Testing tức là các bạn thấy 1 chương trình nhưng các bạn không biết chương trình đó hoạt động như thế nào cả, chỉ biết đưa đầu 
//   vào như thế này đầu ra như thế kia. Nó như 1 cái hộp đen không biết bên trong có gì cả

// - White Box Testing tức là các bạn biết chương trình chạy như thế nào và test xem nó đúng hay sai