/*
global shallow
global mount
*/

import React from "react";

import Counter from "../src/components/counter/counter.js";

describe("<Counter/> test", () => {
  it("should be alive at startup", () => {
    let app = shallow(<Counter />);

    expect(app.find("span").exists()).toBeTruthy();
  });

  it("should increase the counter", () => {
    let app = mount(<Counter />);
    let clickUp = app.find("a.up");

    clickUp.simulate("click");

    expect(app.state().count).toBe(1);
  });

  it("should update the counter in the DOM when increase", () => {
    let app = mount(<Counter />);
    let clickUp = app.find("a.up");
    clickUp.simulate("click");

    expect(app.find("span.count").text()).toBe("1");
  });

  it("should decrease the counter", () => {
    let app = mount(<Counter />);
    let clickUp = app.find("a.down");

    clickUp.simulate("click");

    expect(app.state().count).toBe(-1);
  });

  it("should update the counter in the DOM when decrease", () => {
    let app = mount(<Counter />);
    let clickUp = app.find("a.down");
    clickUp.simulate("click");

    expect(app.find("span.count").text()).toBe("-1");
  });
});
