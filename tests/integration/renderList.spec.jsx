import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RenderList } from "../../src/components/RenderList/RenderList";

test("Properly renders loaded data", async () => {
    window.fetch = jest.fn(() => {
        return {
            then: () => {
                return {
                    then: (callback) => {
                        console.log("You called? ");
                        console.log(callback);
                        return callback([
                            { name: "Kacper" },
                            { name: "Filip" },
                        ]);
                    },
                };
            },
        };
    });
    render(<RenderList />);
    expect(await screen.findByText("Kacper")).toBeVisible();
    expect(await screen.findByText("Filip")).toBeVisible();
});
