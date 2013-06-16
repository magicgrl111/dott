// Returns true if the app is in development mode; false if not
exports.development = function (msg) {
  return app.get('env') === 'development';
};
