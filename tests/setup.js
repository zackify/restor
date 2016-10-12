import React from 'react'
import { spy } from 'sinon'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

global.spy = spy
global.mount = mount
global.React = React
global.expect = expect
global.shallow = shallow
