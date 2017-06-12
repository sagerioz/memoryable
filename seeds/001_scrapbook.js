
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scrapbook').del()
    .then(function () {
      // Inserts seed entries
      return knex('scrapbook').insert([{
      	id:1,
        title:'Rio, age 18',
        description:'Granddaughter',
      	item_image:'https://s15-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSIIDmQH4PbR07cr8L6scOypZnKqeZMVm6GOUrcwVsf-6gM59deTQ&sp=07f15de025a43754aa25112bc780ad6d&anticache=636',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      },{
      	id:2,
        title:'Zayante, age 11',
        description:'Granddaughter',
      	item_image:'https://s15-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1375877%2Fimages%2Fo-MOTHER-HUGGING-TEENAGE-DAUGHTER-facebook.jpg&sp=1b8696e2f53995058d13bb81935574d4',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('scrapbook_id_seq', (SELECT MAX(id) FROM scrapbook));")
    })
};
