var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 100
    },
    {
        id: 2,
        name: 'React JS',
        coin: 200
    },
    {
        id: 3,
        name: 'C#',
        coin: 300
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 5,
        name: 'Angular JS',
        coin: 500
    },
]

// Cách 1
// function total_Coins(){
//     var totalCoins = 0;
//     for(var course of courses){
//         totalCoins += course.coin;
//     }
//     console.log(totalCoins);
// }

// total_Coins();

// Cách 2
// Sử dụng reducer (0 là giá trị khởi tạo mặc định ban đầu, course là từng khoá học (ban đầu có coin là 0 sau đó sẽ cộng dồn lần lượt lên))
// var total_Coins = courses.reduce((course, courseCoin) => course + courseCoin.coin, 0 )
// console.log(total_Coins)