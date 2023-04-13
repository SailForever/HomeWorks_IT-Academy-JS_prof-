var mass=[ 5, 7,
  [ 4, [2], 8, [1,3], 2 ],
  [ 9, [] ],
  1, 8
]

function treeSum(a){
  var sum=0;
  for (var i=0; i<a.length; i++){
    var b=a[i];
    if (Array.isArray(b))
      sum+=treeSum(b);
    else
      sum+=b;
  }
return sum;
}
console.log (treeSum(mass));