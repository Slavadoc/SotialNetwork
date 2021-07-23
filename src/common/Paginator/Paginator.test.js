import React, { useState, useEffect } from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("Paginator comment test ", () => {
  test("page count is 11 but should be showed onle 10 ", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} protionSize={10} />);
    const root = component.root;
    let span = root.findAllByType("span")
    expect(span.length).toBe(10);
  });
  test("if pageCount is more then 10  button Mext should be present", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} protionSize={10} />);
    const root = component.root;
    let button = root.findAllByType("button")
    expect(span.length).toBe(1)
  });
});
