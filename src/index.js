import Request from 'request';
import _ from 'lodash';
import invariant from 'invariant';
import Uuid from 'uuid';

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
    this._uuid = Uuid.v4();
  }

  resetSession()
  {
    this._uuid = Uuid.v4();
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