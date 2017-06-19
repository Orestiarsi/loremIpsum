var loremIpsum = require('lorem-ipsum');

const express = require('express');
const app = express();

app.get('/lorem/:number', function (req, res)
        {
  res.send( loremIpsum ({count: req.params.number
, units: 'paragraphs', format: 'html'
})
  );
    });

app.listen(4000, function () {
});
