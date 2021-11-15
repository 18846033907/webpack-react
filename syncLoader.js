

module.exports = function (source) {
    const options=this.getOptions()
    console.log(options)
  source = source + `console.log('${options.message}');`
  this.callback(null, source)
  console.log(1,source)
};
