import React from 'react'
import Thumbnail from '../index'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(()=>{
    const component = render(<Thumbnail item={{title:"test title", url:"test url", author: "test author", thumbnail: "test thumbnail"}}/>)
    getByTestId = component.getByTestId
})

test("make sure thumbnail has img and p element", ()=>{
    const thumbImg = getByTestId('thumbImg')
    const thumbTitle = getByTestId('thumbTitle')

    expect(thumbImg).toBeTruthy()
    expect(thumbTitle).toBeTruthy()
})


test("make sure thumbnail img has alt attr", ()=>{
    const thumbImg = getByTestId('thumbImg')    
    expect(thumbImg).toHaveAttribute('alt')
})
