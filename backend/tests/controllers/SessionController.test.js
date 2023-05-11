describe('test backend', function () {
    it('test backend.login', function (done) {
        let req = {
            body: {
                email: "email",
                password: "password",
            }
        };
        let res = {
            status: function (code) {
                assert.equal(code, 200);
                return this;
            },
            send: function (data) {
                assert.equal(data, "return value");
                done();
            }
        };
        backend.login(req, res);
    })
}),
    describe('test backend', function () {
        it('test backend.store', function (done) {
            backend.store({
                body: {
                    name: "Teste",
                }
            })
        })
    })