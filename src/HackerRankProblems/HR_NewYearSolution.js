/**
 * Since the question only asks the number of bribes, there's no need to really do a sorting,
 * nor element swapping, nor "bubbling up" an element. All you need to do is to count
 * the number of people who overtake a person.
 *
 *
 *
 * @param q
 * @returns {*}
 */
function minimumBribes(q) {
    let ans = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                ans++;
            }
        }
    }
    console.log(ans);
}

let rowNow = [1, 2, 5, 3, 7, 8, 6, 4];
console.log(minimumBribes(rowNow));
