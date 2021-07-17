var courses = [
    "C++",
    "C#",
    "HTML",
    "CSS"
]

// Xây dựng phương thức forEach
Array.prototype.forEachFunction = function(callback){
    // this chính là array
    for(var index in this){
        // Chỉ duyệt qua những phần tử nằm trong mảng không duyệt qua những phần tử trong prototype của mảng đó. Khi ta định nghĩa 1 phương thức 
        // nào đó bằng prototype thì nó sẽ được đưa vào prototype của mảng đó. 
        if(this.hasOwnProperty(index))
        {
            callback(this[index],index,this)
        }
    }
}

courses.forEachFunction(function(course, index, array){
    console.log(course,index,array)
});
// -------------------------------------------------------------------------------------------------------------------------------------------------

var clubs = [
    {
        name: 'Liverpool Fc',
        cups: 19
    },
    {
        name: 'Manchester Utd',
        cups: 20
    },
    {
        name: 'Manchester City',
        cups: 6
    },
    {
        name: 'Arsenal',
        cups: 13
    }
]

// Xây dựng phương thức filter
Array.prototype.filterFunction = function(callback){
    var output = [];
    // this chính là array
    for(var index in this){
        // Chỉ duyệt qua những phần tử nằm trong mảng không duyệt qua những phần tử trong prototype của mảng đó. Khi ta định nghĩa 1 phương thức 
        // nào đó bằng prototype thì nó sẽ được đưa vào prototype của mảng đó. 
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            // result chính là điều kiện (Condition)
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var filterClubs = clubs.filterFunction(function(club, index, array){
    return club.cups < 15
})

console.log(filterClubs);
// -------------------------------------------------------------------------------------------------------------------------------------------------

var clbs = [
    {
        name: 'Liverpool Fc',
        cups: 19,
        isEngland: true,
    },
    {
        name: 'Manchester Utd',
        cups: 20,
        isEngland: true,
    },
    {
        name: 'Manchester City',
        cups: 6,
        isEngland: true,
    },
    {
        name: 'Arsenal',
        cups: 13,
        isEngland: true,
    }
]

// Xây dựng phương thức some
Array.prototype.someFunction = function(callback){
    var output = false;
    // this chính là array
    for(var index in this){
        // Chỉ duyệt qua những phần tử nằm trong mảng không duyệt qua những phần tử trong prototype của mảng đó. Khi ta định nghĩa 1 phương thức 
        // nào đó bằng prototype thì nó sẽ được đưa vào prototype của mảng đó. 
        if(this.hasOwnProperty(index)){
            // Kiểm tra chỉ cần 1 thằng true là thoát luôn
            var result = callback(this[index], index, this);
            if(result){
                output = true;
                break;
            }
        }
    }
    return output;
}

var filterClbs = clbs.someFunction(function(clb, index, array){
    return clb.isEngland;
})

console.log(filterClbs);
// -------------------------------------------------------------------------------------------------------------------------------------------------

// Xây dựng phương thức every
Array.prototype.everyFunction = function(callback){
    var output = true;
    // this chính là array
    for(var index in this){
        // Chỉ duyệt qua những phần tử nằm trong mảng không duyệt qua những phần tử trong prototype của mảng đó. Khi ta định nghĩa 1 phương thức 
        // nào đó bằng prototype thì nó sẽ được đưa vào prototype của mảng đó. 
        if(this.hasOwnProperty(index)){
            // Kiểm tra chỉ cần 1 thằng false là thoát luôn
            var result = callback(this[index], index, this);
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

var filterClbsContinue = clbs.everyFunction(function(clb, index, array){
    return clb.isEngland;
})

console.log(filterClbsContinue);