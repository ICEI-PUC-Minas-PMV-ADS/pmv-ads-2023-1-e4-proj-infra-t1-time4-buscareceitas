const sqlite3 = require('sqlite3').verbose();

module.exports = {
    
  async instanceDatabase() {
    return new sqlite3.Database('mydatabase', (err) => { if (err) { return console.error(err.message);} console.log('[server.sqlLite] - [ connected to the in-memory SQLite database]');});
  },

  async closeDatabase (db){
    db.close((err) => { if (err) {return console.error(err.message);} console.log('[server.sqlLite] - [ closing connection to the in-memory SQLite database]');});
  },

  buildFilter(params, sql) {

  if (params.ingredientes){
      for(ing of params.ingredientes){
        sql = sql.concat(" AND ingredientes LIKE '%@param.ingrediente%'").replace('@param.ingrediente', ing)
      }
    }

    if (params.tempoPreparo)
      sql = sql.concat(" AND tempoPreparo = '@param.tempoPreparo' ").replace('@param.tempoPreparo', params.tempoPreparo)

    if (params.categoria)
      sql = sql.concat(" AND categoria = '@param.categoria' ").replace('@param.categoria', params.categoria)

    if (params.titulo){
      sql = sql.concat(" AND titulo LIKE '%@param.titulo%' ").replace('@param.titulo', params.titulo)
    }

    return sql;
  },

  async findAll(params) {

    const db = await this.instanceDatabase();

    let sql = "SELECT DISTINCT id, titulo, ingredientes, modoPreparo, categoria, informacoesAdicionais, usuarioNome, usuarioEmail, tempoPreparo, rendimento FROM recipe WHERE 1=1 "

    sql = this.buildFilter(params, sql);

    sql += ` ORDER BY id desc LIMIT ${params.linesPerPage || 30} OFFSET ${((--params.page || 0) * (params.linesPerPage || 0))} `

    console.log(sql);
    
    return await new Promise((resolve, reject) => {
      try {
        db.serialize(async () => {
          await db.all(sql, async (err, rows) => {
            if (err) {
              console.error(err.message);
            }
            console.log(rows);
            await resolve(rows)
          });
        });
      } catch (error) {
          console.log(`Error With Select ALL(): \r\n ${error}`)
          reject();
      }finally{
        this.closeDatabase(db);
      }
  })

  }

};
