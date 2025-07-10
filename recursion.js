// we build a table of nth row (1-indexed). we start by writing 0 in 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10. For example for n = 3, the 1st row is 0, 2nd row is 01, 3rd row is 0110. Give 2 integer n and k, return the kth (1-indexed) symbol in the nth row of the table of n rows.

function kthIndex(n, k) {
  if (n === 1) {
    return 0;
  }

  let length = Math.pow(2, n - 1);
  let mid = length / 2;
  if (k <= mid) {
    return kthIndex(n - 1, k);
  } else {
    return 1 - kthIndex(n - 1, k - mid);
  }
}

console.log(kthIndex(4, 4));
