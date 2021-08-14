const expect = require('chai').expect;

const app = require('./index');

describe("Given an app", () => {
  describe("When initialised", () => {
    it('returns the app name', () => {
      expect(app()).to.equal("Skeleton Application");
    })
  })
});