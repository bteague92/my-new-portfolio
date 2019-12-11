
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Guess Who',
          techUsed: 'React, JavaScript, NodeJS',
          teamSize: '4',
          link: 'https://front-end.bteague92.now.sh/',
        },
        {
          name: 'Potes',
          techUsed: 'React, JavaScript, NodeJS',
          teamSize: '4',
          link: 'https://front-end.bteague92.now.sh/',
        },
        {
          name: 'Workout Journal',
          techUsed: 'React, JavaScript, NodeJS',
          teamSize: '4',
          link: 'https://front-end.bteague92.now.sh/',
        }
      ]);
    });
};

