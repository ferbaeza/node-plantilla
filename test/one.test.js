import assert from 'assert';

function sum(a, b) {
    return a + b;
}

// describe() is a test suite
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return 2 when the value is present', function () {
            assert.equal([1, 2, 3].indexOf(3), 2);
        });

        it('debe devolver 4 cuando sumamos 2 mas 2', function () {
            let result = sum(2, 2);
            assert.equal(result, 4);
        });
    });
});