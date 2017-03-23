import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Tweets from '../components/Tweets';
import jsdom from 'jsdom';
import sinon from 'sinon';
import * as requests from '../components/requests';

global.document = jsdom.jsdom('');
global.window = document.defaultView;

test('tweets are loaded', (assert) => {
  const tweets = [
    {
      "userId" : 1
    },{
      "userId" : 2
    }
  ];
  sinon.stub(requests, 'tweetsRequest').callsArgWith(0, tweets);

  const component = mount(<Tweets />);

  const expected = true;
  const actual = component.find('.tweets-main').length > 0;

  assert.equal(actual, expected,
    'Tweets loaded correctly');
  assert.end();
});