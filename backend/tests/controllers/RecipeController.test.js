describe('test backend', function () {
  it('test backend.store', function (done) {
    backend.store(null, null).then(function (result) {
      assert.equal(result, null);
      done();
    });
  }),
    it('test backend.findAll', function (done) {
      let req = {
        query: {
          filter: {
            name: 'name'
          }
        }
      };
      let res = {
        json: function (recipeFinded) {
          assert.equal(recipeFinded.name, 'name');
          done();
        }
      };
      backend.findAll(req, res);
    }),
    it('test backend.update', function (done) {
      let req = {};
      let res = {};
      backend.update(req, res);
      done();
    }),
    it('test backend.delete', function (done) {
      let req = {};
      let res = {};
      backend.delete(req, res).then(function (value) {
        assert.equal(value, 'Sucesso');
        done();
      });
    })
})
