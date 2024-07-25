/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    let commonLength = 0;
    
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }
    
    let totalOps = s.length - commonLength + t.length - commonLength;
    
    if (totalOps === k || (totalOps < k && (k - totalOps) % 2 === 0) || s.length + t.length <= k) {
        return "Yes";
    } else {
        return "No";
    }
}