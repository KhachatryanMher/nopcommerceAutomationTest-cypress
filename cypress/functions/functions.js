class Function {
   random(max, min = 0) {
      return String(Math.round(Math.random() * (max-min) + min));
   }
}

module.exports = new Function();