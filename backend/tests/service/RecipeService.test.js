describe('test recipe service', function () {

    it('test backend.findAll', function (done) {
        backend.findAll(function (err, res) {
            assert.isNull(err);
            assert.isArray(res);
            assert.equal(2, res.length);
            done();
        });
    })

    it('test service.update', function (done) {
        let id = '1';
        let recipe = {
            id: '1',
            name: 'test recipe',
            ingredients: 'test ingredients',
            directions: 'test directions'
        };
        backend.update(id, recipe).then(() => {
            backend.get(id).then((recipe) => {
                assert.equal(recipe.id, id);
                assert.equal(recipe.name, 'test recipe');
                assert.equal(recipe.ingredients, 'test ingredients');
                assert.equal(recipe.directions, 'test directions');
                done();
            });
        });
    })
    
    it('test service.delete', function (done) {
        var id = 1;
        backend.delete(id).then(function () {
            done();
        }).catch(function (err) {
            done(err);
        });
    })





})