import React from 'react';
import { render, screen } from '@testing-library/react';
import "./playerSearchCard.css";
import {PlayerSearchCard} from "./playerSearchCard.component";
import {IPlayerSearchCardProps} from "./interfaces/IPlayerSearchCardProps";

const mockUser: IPlayerSearchCardProps = {
    name: "my fake name",
    iconPath: "/my-fake-url/"
}

const renderCard = () => render(<PlayerSearchCard iconPath={mockUser.iconPath} name={mockUser.name}/>)

describe("Given a mock user", () => {
    beforeEach(() => {
        renderCard()
    })

    test("it should render a users name", () => {
        expect(screen.getByText(mockUser.name)).not.toBeNull();
    })

    test("it should render the users platform icon", () => {
        const image = screen.getByAltText("User platform icon") as HTMLImageElement;
        expect(image.src).toBe(`https://www.bungie.net${mockUser.iconPath}`);
    })
})

