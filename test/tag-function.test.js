function tagFunction(array, ...args) {
    console.log(array);
    console.log(args);
}

test('tag function', () => {
    const nama = 'koir';
    tagFunction `Hello ${nama} , bye`;
});

test('tag function sql', () => {
    const nama = 'koir'
    const umur = 23;

    tagFunction `SELECT * FROM users WHERE name = ${nama} AND umur = ${umur}`;
});