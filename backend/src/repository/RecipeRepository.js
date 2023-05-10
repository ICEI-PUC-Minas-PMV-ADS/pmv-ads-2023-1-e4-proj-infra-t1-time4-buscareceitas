const sqlite3 = require('sqlite3').verbose();

module.exports = {

  async instanceDatabase() {
    return new sqlite3.Database('mydatabase', (err) => { if (err) { return console.error(err.message); } console.log('[server.sqlLite] - [ connected to the in-memory SQLite database]'); });
  },

  async closeDatabase(db) {
    db.close((err) => { if (err) { return console.error(err.message); } console.log('[server.sqlLite] - [ closing connection to the in-memory SQLite database]'); });
  },

  buildFilter(params, sql) {

    if (params.ingredientes) {
      for (ing of params.ingredientes) {
        sql = sql.concat(" AND ingredientes LIKE '%@param.ingrediente%'").replace('@param.ingrediente', ing)
      }
    }

    if (params.tempoPreparo)
      sql = sql.concat(" AND tempoPreparo = '@param.tempoPreparo' ").replace('@param.tempoPreparo', params.tempoPreparo)

    if (params.categoria)
      sql = sql.concat(" AND categoria = '@param.categoria' ").replace('@param.categoria', params.categoria)

    if (params.titulo) {
      sql = sql.concat(" AND titulo LIKE '%@param.titulo%' ").replace('@param.titulo', params.titulo)
    }

    if (params.id) {
      sql = sql.concat(" AND id = '@param.id' ").replace('@param.id', params.id)
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
            console.log(JSON.stringify(rows));
            await resolve(rows)
          });
        });
      } catch (error) {
        console.log(`Error With Select ALL(): \r\n ${error}`)
        reject();
      } finally {
        this.closeDatabase(db);
      }
    })

  },

  async update(id, recipe) {

    const db = await this.instanceDatabase();

    let sql = `UPDATE recipe SET titulo = '@param.titulo', ingredientes = '@param.ingredientes', modoPreparo = '@param.modoPreparo', categoria = '@param.categoria', informacoesAdicionais = '@param.informacoesAdicionais', usuarioNome = '@param.usuarioNome', usuarioEmail = '@param.usuarioEmail', tempoPreparo = '@param.tempoPreparo', rendimento = '@param.rendimento' WHERE id = @param.id`

    sql = sql.replace('@param.titulo', recipe.titulo)
    sql = sql.replace('@param.ingredientes', recipe.ingredientes)
    sql = sql.replace('@param.modoPreparo', recipe.modoPreparo)
    sql = sql.replace('@param.categoria', recipe.categoria)
    sql = sql.replace('@param.informacoesAdicionais', recipe.informacoesAdicionais)
    sql = sql.replace('@param.usuarioNome', recipe.usuarioNome)
    sql = sql.replace('@param.usuarioEmail', recipe.usuarioEmail)
    sql = sql.replace('@param.tempoPreparo', recipe.tempoPreparo)
    sql = sql.replace('@param.rendimento', recipe.rendimento)
    sql = sql.replace('@param.id', id)

    console.log(sql);

    return await new Promise((resolve, reject) => {
      try {
        db.serialize(async () => {
          await db.run(sql, async (err, rows) => {
            if (err) {
              console.error(err.message);
            }
            console.log(rows);
            await resolve(rows)
          });
        });
      } catch (error) {
        console.log(`Error With RUN ALL(): \r\n ${error}`)
        reject();
      } finally {
        this.closeDatabase(db);
      }
    })
  },

  async delete(id) {

    const db = await this.instanceDatabase();

    let sql = `DELETE FROM recipe WHERE  id = @param.id`
    sql = sql.replace('@param.id', id)

    console.log(sql);

    return await new Promise((resolve, reject) => {
      try {
        db.serialize(async () => {
          db.run(sql, async (err) => {
            if (err) {
              console.error('Ops! Erro ao excluir receita: ' + err.message)
              reject(err)
            } else {
              console.log('Receita excluida com sucesso: ' + id)
              resolve(id)
            }
          });
        });
      } catch (err) {
        console.log(`Erro ao excluir receita: \r\n ${err}`)
        reject(err);
      } finally {
        this.closeDatabase(db);
      }
    })
  }

};
