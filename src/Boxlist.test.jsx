import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Boxlist from "./Boxlist";


it("it renders w/out crashing", function () {
    render(<Boxlist />);
});

it("it matches snapshot", function () {
    const { container } = render(<Boxlist />);
    expect(container).toMatchSnapshot();
});

