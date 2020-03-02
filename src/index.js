// You should implement your task here.

module.exports = towelSort = (matrix = []) =>
    matrix.reduce(
        (result, arr, i) =>
            i % 2 ? result.concat(arr.reverse()) : result.concat(arr),
        []
    );
