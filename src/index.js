import Request from 'request';
import _ from 'lodash';
import invariant from 'invariant';

let instance = false;

class GoogleAnalyticsMeasurementProtocol
{

  constructor( options = {} )
  {
    invariant(options.trackingId, 'You must provide a tracking ID');
    this._trackingId = options.trackingId;
    this._options = _.defaults(options || {}, {
      protocol: "https",
      host: 'www.google-analytics.com',
      maxSockets: 10
    });
    this._request = Request.defaults({
      forever: true,
      pool: {maxSockets: this._options.maxSockets}
    });
  }

  async collect( parameters = {} )
  {
    return this.send( parameters ).catch( (error) => {

    });
  }

  async send()
  {
    // Do Request
    return true;
  }

  async queue()
  {

  }

}