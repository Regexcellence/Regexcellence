const requestHandler = (req, res) => ({
  if (req.method === 'GET') {
    if (req.url === '/regex/*') {
      console.log('entering /regex/*!!!!');
      res.redirect('/');
      res.end('success');
    }
  } else {
    res.end(404);
  }
});
module.exports = requestHandler;
