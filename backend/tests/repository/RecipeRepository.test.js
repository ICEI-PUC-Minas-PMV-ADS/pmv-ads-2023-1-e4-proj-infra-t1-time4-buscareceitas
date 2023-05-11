describe('test backend', function() {
    it('test backend.delete', function(done) {
        let id = 1
        backend.delete(id).then((result) => {
            assert.isNotNull(result);
            done();
        }).catch((err) => {
            done(err);
        });
    })
}),
describe('test backend', function() {
    it('test backend.update', function(done) {
        let id = 0;
        let recipe = null;
        let result = backend.update(id, recipe);
        assert.equal(result, null);
        done();
    })
}),
describe('test backend', function() {
    it('test backend.findAll', function(done) {
        let params = {};
        let result = backend.findAll(params);
        assert.equal(result, true);
        done();
    })
}),
describe('test backend', function() {
    it('test backend.buildFilter', function(done) {
        let params = {
            ingredientes: ['ovo', 'carne'],
            tempoPreparo: 10,
            categoria: 'torta',
            titulo: 'torta de carne',
            id: 1
        }
        let sql = "SELECT * FROM receita WHERE 1=1 ";
        let result = backend.buildFilter(params, sql);
        assert.equal(result, "SELECT * FROM receita WHERE 1=1  AND ingredientes LIKE '%ovo%' AND ingredientes LIKE '%carne%' AND tempoPreparo = '10'  AND categoria = 'torta'  AND titulo LIKE '%torta de carne%'  AND id = '1' ");
        done();
    })
}),
describe('test backend', function() {
    it('test backend.instanceDatabase', function(done) {
        backend.instanceDatabase().then((db) => {
            assert.isNotNull(db);
            done();
        }).catch((err) => {
            done(err);
        });
    })
}),
describe('test backend', function() {
    it('test backend.closeDatabase', function(done) {
        let db = null;
        backend.closeDatabase(db).then(function(){
            done();
        }).catch(function(err){
            console.error(err);
            done();
        });
    })
})