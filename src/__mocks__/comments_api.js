const fetchComments = async () => Promise.resolve([
  {
    username: 'houssam',
    comment: 'this is tasty!',
    creation_date: '2021-10-13',
  },

  {
    comment: 'Ughh no salt !',
    username: 'houssam',
    creation_date: '2021-10-13',
  },
  {
    comment: 'this is tasty!',
    username: 'houssam',
    creation_date: '2021-10-13',
  },
  {
    comment: 'this is good!',
    username: 'houssam',
    creation_date: '2021-10-13',
  },
]);

exports.fetchComments = fetchComments;