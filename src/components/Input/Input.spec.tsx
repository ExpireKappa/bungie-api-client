import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { Input } from "./Input";

const renderInput = (props?: React.HTMLProps<HTMLInputElement>): RenderResult => {
    return render(<Input {...props}/>);
}

describe("Using the Input component", () => {
    describe("given a className is provided", () => {
        describe("when the component initially renders", () => {
            let wrapper: RenderResult;

            beforeEach(() => {
                wrapper = renderInput({className: "Wassup"});
            })
            
            test("then it should render with the applied className", () => {
                const input = wrapper.container.querySelectorAll("input")[0];
                expect(input.className).toContain("Wassup");
            })
        })
    })

    describe("given default props", () => {
        describe("when the component initially renders", () => {
            let wrapper: RenderResult;

            beforeEach(() => {
                wrapper = renderInput();
            })

            describe("and the input has not been focussed", () => {
                test("it should not have a `focus` className on the border", () => {
                    const border = wrapper.container.querySelectorAll("div")[0];
                    expect(border.className).not.toContain("focus");
                })
            })
            
            describe("and the input has been focussed", () => {
                let input: HTMLInputElement;
                
                beforeEach(() => {
                    input = wrapper.container.querySelectorAll("input")[0];
                    input.focus()
                })

                test("it should have a `focus` className on the border", () => {
                    const border = wrapper.container.querySelectorAll("div")[0];
                    expect(border.className).toContain("focus");
                })

                describe("then focus is moved to another element", () => {
                    beforeEach(() => {
                        const button = document.createElement("input");
                        button.className = "focus-target";
                        
                        wrapper.container.appendChild(button);
                        wrapper.container.querySelectorAll<HTMLButtonElement>(".focus-target")[0].focus();
                    })      

                    test("it should not have a `focus` className on the border", () => {
                        const border = wrapper.container.querySelectorAll("div")[0];
                        expect(border.className).not.toContain("focus");
                    })
                })
            })
        })
    })
})