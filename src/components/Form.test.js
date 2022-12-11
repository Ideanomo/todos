import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("Form renders without crashing", () => {
    render(<Form />)
});

test("Focus input control upon first render", () => {
    render(<Form />);
    const inputControl = screen.getByPlaceholderText("Add todo");
    expect(inputControl).toHaveFocus();
})

test("handleSubmit will not call addTodos() if nothing in input field", () => {
    const mockedAddTodos = jest.fn();
    render(<Form onEnterTodo={mockedAddTodos} />);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.click(buttonElement);
    expect(mockedAddTodos).not.toHaveBeenCalled();
})

test("Successful form submission", () => {
    const mockedAddTodos = jest.fn();
    render(<Form onEnterTodo={mockedAddTodos} />);
    const input = screen.getByPlaceholderText("Add todo");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(input, {target: {value: "shopping" } });
    fireEvent.click(buttonElement);

    expect(mockedAddTodos).toHaveBeenCalledTimes(1);
})