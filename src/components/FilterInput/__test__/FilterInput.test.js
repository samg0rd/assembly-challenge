import React from 'react'
import FilterInput from '../index'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(()=>{
    const component = render(<FilterInput/>)
    getByTestId = component.getByTestId
})

test("search filter initially starts empty - no value", ()=>{
    const searchFilterInput = getByTestId("searchFilter")
    expect(searchFilterInput.value).toBe("")
})

test("changing value of search input works correctly", ()=>{
    const searchFilterInput = getByTestId("searchFilter")
    expect(searchFilterInput.value).toBe("")

    fireEvent.change(searchFilterInput,{
        target: {
            value: "new"
        }
    })

    expect(searchFilterInput.value).toBe("new")

})