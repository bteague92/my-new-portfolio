module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './data/projects.db3'
      },
      migrations: {
        directory: './data/migrations' /// will be created automatically
      },
      seeds: {
        directory: './data/seeds'  /// will be created automatically
      }
    },
  };