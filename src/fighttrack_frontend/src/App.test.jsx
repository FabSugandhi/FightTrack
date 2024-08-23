import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import user from '@testing-library/user-event'
import App from "./App.jsx"

describe("App Component", () => {
    it("shows the heading", () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        const h2 = container.querySelector('h2')

        expect(h2).toBeInTheDocument()
        expect(h2).toHaveTextContent('Entries')
    })

    it('render CategorySelection when New Entry menu is clicked', async () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        
        // Get a reference to the New Entry menu item
        const newEntry = container.querySelector('nav #newEntry')
        // Simulate user clicking on New Entry
        await user.click(newEntry)

        const heading = container.querySelector('h3')

        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('Please select a category:')        
    })
})
