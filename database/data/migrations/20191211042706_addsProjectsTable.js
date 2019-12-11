exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .unique()
            .notNullable()
        tbl.string('techUsed', 255)
            .notNullable()
        tbl.integer('teamSize', 3)
            .notNullable()
        tbl.string('link', 100)
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects');
};
