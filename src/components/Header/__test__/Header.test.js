import React from 'react'
import Header from '../index'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(()=>{
    const component = render(<Header/>)
    getByTestId = component.getByTestId
})

test("header renders correct test",()=>{
    const headerH1 = getByTestId("headerH1")
    expect(headerH1.textContent).toBe("Assebly Challenge")
})