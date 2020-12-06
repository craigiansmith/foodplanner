import React from 'react'
import ReactDom from 'react-dom'

import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()} )

import {Macros} from 'index'

describe('Set up', () => {
    it('should run tests', () => {
        const div = document.createElement('div')
        //reactDom.render(<MealList />, div)
    })
})
