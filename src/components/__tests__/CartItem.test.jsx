import { fireEvent, render, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import { describe, expect } from "vitest";

describe("CartItem", () => {
    test("renders cart item correctly with data", () => {
        const item = {
            id: 1,
            name: "TestName",
            price: 99.99
        };
        render(<CartItem item={item} removeFromCart={() => {}}></CartItem>);
        expect(screen.getByText("TestName")).toBeInTheDocument();
        expect(screen.getByText("$99.99")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("calls removeFromCart when button is clicked", () => {
        const mockRemoveFromCart = vi.fn();
        const item = {
            id: 1,
            name: "TestName",
            price: 99.99
        };
        render(
            <CartItem
                item={item}
                removeFromCart={mockRemoveFromCart}
            ></CartItem>
        );
        const removeFromCartButton = screen.getByRole("button");
        fireEvent.click(removeFromCartButton);
        expect(mockRemoveFromCart).toHaveBeenCalledWith(item);
        expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    });
});
