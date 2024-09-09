function makeObject2(val) {
  return {
    x_: val,
    printValue: function() {
      console.log(this.x_);
      return this;
    },
    increment: function() {
      this.x_++;
      console.log(this)
      return this;
    }
  };
}

makeObject2(10)
    .printValue()
    .increment()
    .printValue()
    .increment()
    .increment()
    .printValue();

console.log(this)
