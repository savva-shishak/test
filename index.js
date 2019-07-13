const assert = require('assert')
const rp = require('request-promise')

describe('object operations', () => {
  let data = {"bpi":{"2019-01-01":3869.47,"2019-01-02":3941.2167,"2019-01-03":3832.155,"2019-01-04":3863.6267,"2019-01-05":3835.5983,"2019-01-06":4083.165,"2019-01-07":4041.4583,"2019-01-08":4029.9917,"2019-01-09":4028.2917,"2019-01-10":3669.5825,"2019-01-11":3660.9583,"2019-01-12":3658.6725,"2019-01-13":3540.1583,"2019-01-14":3706.1725,"2019-01-15":3604.1333,"2019-01-16":3630.2567,"2019-01-17":3665.41,"2019-01-18":3630.785,"2019-01-19":3708.9633,"2019-01-20":3552.8933,"2019-01-21":3548.69,"2019-01-22":3598.2183,"2019-01-23":3576.01,"2019-01-24":3598.2717,"2019-01-25":3582.2,"2019-01-26":3580.775,"2019-01-27":3553.0133,"2019-01-28":3454.48,"2019-01-29":3421.12,"2019-01-30":3482.3},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Jan 31, 2019 00:03:00 UTC","updatedISO":"2019-01-31T00:03:00+00:00"}}

  before(async () => {
    /**
     * INSTRUCTIONS:
     *
     * - Visit https://www.coindesk.com/api
     * - You will find "Historical BPI data" at the bottom of the page with instructions on composing the query
     * - Make a request for prices between January 1, 2019 - January 31, 2019
     * - Populate the params to complete the request (you don't have to use the `url` package)
     * - Attach the response to the data variable defined above
     */
    const params = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31"

    const result = await rp(params)
    data = result.bpi
  })

  it('should receive correct data', () => {
    /**
     * This first test has been completed.
     * It should pass if the query from step 1 is acurate.
     */
    const exists = data.hasOwnProperty('2019-01-01')
    assert.ok(exists)
  })

  it('should handle basic arithmetic', () => {
    /**
     * INSTRUCTIONS:
     *
     * Return the sum of all values
     * See expected result below
     */
    const actual = null // TODO:
    const expected = 114390.02239999999
    assert.equal(actual, expected)
  })

  it('should handle finding', () => {
    /**
     * INSTRUCTIONS:
     *
     * Find the top value (Number) from any date
     * See expected result below
     */
    const actual = null // TODO:
    const expected = 4083.165
    assert.equal(actual, expected)
  })

  it('should extract results', () => {
    /**
     * INSTRUCTIONS:
     *
     * Extract only the results from Mondays
     * See expected result below
     */
    const actual = null // TODO:
    const expected = {
      '2019-01-01': 3869.47,
      '2019-01-08': 4029.9917,
      '2019-01-15': 3604.1333,
      '2019-01-22': 3598.2183,
      '2019-01-29': 3421.12
    }
    assert.deepEqual(actual, expected)
  })

  it('should handle sorting', () => {
    /**
     * INSTRUCTIONS:
     *
     * Return the top 5 dates in descending order
     * See expected result below
     */
    const actual = null // TODO:
    const expected = {
      '2019-01-06': 4083.165,
      '2019-01-07': 4041.4583,
      '2019-01-08': 4029.9917,
      '2019-01-09': 4028.2917,
      '2019-01-02': 3941.2167
    }
    assert.deepEqual(actual, expected)
  })
})