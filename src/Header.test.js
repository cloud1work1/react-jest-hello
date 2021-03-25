import {render,screen} from '@testing-library/react';
import App from './App';

test('expect header component to render test', () => {
    render(<App/>);
    const element = screen.getByText(/Header Component for Unit Testing !/i);
    expect(element).toBeInTheDocument();
});