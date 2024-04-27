export const flat = function (arr, n) {
    return n <= 0 ? arr : arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flat(curr, n - 1));
        } else {
            acc.push(curr);
            return acc;
        }
    }, []);
};
