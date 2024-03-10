import { Button } from "../../src/components/Button/Button";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

test("Properly renders passed text", () => {
    render(<Button>Kliknij mnie!</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Kliknij mnie!");
});

test("Calls onClick callback after being clicked", () => {
    const onClickCallback = jest.fn(() => console.log("Button clicked"));
    render(<Button onClick={onClickCallback} />);
    fireEvent.click(screen.getByRole("button"));

    expect(onClickCallback).toHaveBeenCalled();
});
