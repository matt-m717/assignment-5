import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";
import { describe, expect, test } from "vitest";

const storeName = "ComponentCorner";

describe("HomePage", () => {
    test("renders without crashing", () => {
        render(<HomePage storeName={storeName}></HomePage>);
    });

    test("displays main content", () => {
        render(<HomePage storeName={storeName}></HomePage>);

        expect(screen.getByText("Why Shop With Us?")).toBeInTheDocument();
        expect(screen.getByText("Quality Products")).toBeInTheDocument();
        expect(screen.getByText("Fast Shipping")).toBeInTheDocument();
        expect(screen.getByText("Great Support")).toBeInTheDocument();
    });
});
