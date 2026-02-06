import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import { describe, expect, test } from "vitest";

const storeName = "ComponentCorner";

const renderWithRouter = component => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("HomePage", () => {
    test("renders without crashing", () => {
        renderWithRouter(<HomePage storeName={storeName}></HomePage>);
    });

    test("displays main content", () => {
        renderWithRouter(<HomePage storeName={storeName}></HomePage>);

        expect(screen.getByText("Why Shop With Us?")).toBeInTheDocument();
        expect(screen.getByText("Quality Products")).toBeInTheDocument();
        expect(screen.getByText("Fast Shipping")).toBeInTheDocument();
        expect(screen.getByText("Great Support")).toBeInTheDocument();
    });
});
