
module.exports = function (source) {
  const options = this.getOptions();
  const asyncfunc = this.async();
//   setTimeout(() => {
    source += "console.log('着魔');";
    asyncfunc(null, source);
//   },200);
  console.log(2,source)
};
