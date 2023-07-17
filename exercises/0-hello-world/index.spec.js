const hello = require('./index.js');

describe('Hello', function () {
  it('says Hello world', function () {
    expect(hello('World')).toEqual('Hello, World!');
  });
  it('says Hello toys', function () {
    expect(hello('toys')).toEqual('Hello, toys!');
  });
});
