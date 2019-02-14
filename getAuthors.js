var g = document.getElementsByClassName('commentarea');
var authors = {};
for(let item of g[0].getElementsByClassName('author')) {
    if(authors[item.text] == undefined) {
        authors[item.text] = new Object();
    } 
    let currCount = authors[item.text].count;
    if(currCount == undefined) {
        currCount = 0;
    }
    currCount += 1;
    authors[item.text].count = currCount;
}

var tuples = [];

for (var key in authors) tuples.push([key, authors[key].count]);

tuples.sort(function(a,b) { return b[1] - a[1]});

topFive = tuples.slice(0, 5);
console.log(topFive);

function exists(arr, search) {
    return arr.some(row => row.includes(search));
}

for(let item of g[0].getElementsByClassName('author')) {
    if(exists(topFive,item.text))
    {
        item.style.backgroundColor = '#e8453c';
    }
}

