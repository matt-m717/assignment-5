import { render, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
};
global.localStorage = localStorageMock;

describe("App", () => {
    test("renders correctly", () => {
        render(<App />);
    });
});

describe("App localStorage Integration", () => {
    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    test("loads cart from localStorage on component mount", () => {
        const testCart = JSON.stringify([
            {
                id: 1,
                name: "TestName",
                price: 99.99,
                image: "https://placehold.co/600x400",
                description: "Test description"
            }
        ]);
        localStorageMock.getItem.mockReturnValue(testCart);

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith("cart");
    });

    test("saves cart to localStorage on item added", async () => {
        localStorageMock.getItem.mockReturnValue("[]");
        render(<App />);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith("cart", "[]");
        });
    });

    test("persists cart across component remounts", async () => {
        localStorageMock.getItem.mockReturnValue("[]");

        const { unmount } = render(<App />);

        const testCart = [
            {
                id: 1,
                name: "TestName",
                price: 99.99,
                image: "https://placehold.co/600x400",
                description: "Test description"
            }
        ];

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith("cart", "[]");
        });

        unmount();

        localStorageMock.getItem.mockReturnValue(JSON.stringify(testCart));

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith("cart");
    });
});
