import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { describe, expect } from "vitest";

describe("ProductCard", () => {
    test("renders product card correctly with data", () => {
        const product = {
            id: 1,
            name: "TestName",
            price: 99.99,
            image: "https://placehold.co/600x400",
            description: "Test description"
        };
        render(
            <ProductCard product={product} addToCart={() => {}}></ProductCard>
        );
        expect(screen.getByText("TestName")).toBeInTheDocument();
        expect(screen.getByText("$99.99")).toBeInTheDocument();
        expect(screen.getByText("Test description")).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
