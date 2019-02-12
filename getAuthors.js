var g = document.getElementsByClassName('commentarea');
var authors = {};
for(let item of g[0].getElementsByClassName('author')) {
    item.style.backgroundColor = '#e8453c';
    let currCount = authors[item.text].count;
    if(currCount == undefined) {
        currCount = 0;
    }
    currCount += 1;
    authors[item.text].count = currCount;
}

var tuples = [];

for (var key in obj) tuples.push([key, obj[key]]);

tuples.sort(function(a,b) { return a[1] - b[1]});