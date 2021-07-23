import React, { useState, useEffect } from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="slavaDoc"/>);
    const root = component.getInstance();
    expect(root.state.status).toBe("slavaDoc");
  });
  test("after creator <span> should be displaed", () => {
    const component = create(<ProfileStatus status="slavaDoc" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.length).toBe(1);
  });
  test("after creator <span> should be displaed", () => {
    const component = create(<ProfileStatus status="slavaDoc" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.innerText).toBe("slavaDoc");
  });
});
