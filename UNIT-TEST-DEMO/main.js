// Pure functions (Chức năng thuần tuý)

// Hàm kiểm tra số lẻ
export const isOddNumber = (number) => number % 2 === 1;

// Hàm đếm số chẵn
export const countEvenNumbers = (numberList) => {
    if(!Array.isArray(numberList)) return 0;
    return numberList.filter((x) => x % 2 === 0).length;
};