import React from "react";
import { render } from "@testing-library/react-native";

import MascotList from "../components/MascotList";

describe('Home test screen', () => {
    it("renders", () => {
    //Arrange
    render(<MascotList />);
});
});