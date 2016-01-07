var watson = require('watson-developer-cloud');
var retrieve_and_rank = watson.retrieve_and_rank({
  username: '{username}',
  password: '{password}',
  version: 'v1'
});

var params = {
  ranker_id: 'B2E325-rank-67',
  answer_data: fs.createReadStream('answer.csv'),
};

retrieve_and_rank.rank(params,
  function(err, response) {
    if (err)
      console.log('error: ', err);
    else
      console.log(JSON.stringify(response, null, 2));
});