import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Countries from './Countries';

jest.mock('axios')

describe('Countries', () => {
  it('should fetch data and show table successfully', async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data :{ data: { countries :[
        {
            name: 'Estonia',
            code: 'EE'
        },
        {
            name: 'Finland',
            code: 'FI'
        }
      ]},}
    });

    render(<Countries />);

    await waitFor(() => {
      const country1 = screen.getByText(/Estonia/i);
      expect(country1).toBeInTheDocument();

      const country2 = screen.getByText(/Finland/i);
      expect(country2).toBeInTheDocument();

      const header = screen.getByText(/List of countries/i);
      expect(header).toBeInTheDocument();
    });
  });

  it('should show error page if data is not fetched successfully', async () => {
    (axios.post as jest.Mock).mockRejectedValue("error");

    render(<Countries />);

    await waitFor(() => {
      const error = screen.getByText(/Something went wrong!/i);
      expect(error).toBeInTheDocument();
    });
  });
});