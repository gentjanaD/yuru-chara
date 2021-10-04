import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import AddMascotModal from './AddMascotModal';

afterEach(cleanup);

describe('Add Mascot', () => {
  it('Renders default elements', () => {
    const { getAllByText } = render(<AddMascotModal />);
    expect(getAllByText('Add a Mascot').length).toBe(1);
  });
  it('Render the correct message', () => {
    const { queryByText } = render(<AddMascotModal />);
    expect(queryByText('Add a Mascot')).not.toBeNull();
  });
  describe('Clicking send', () => {
    it('Clears the message field', () => {
      let { getByTestId } = render(<AddMascotModal />);

      fireEvent.changeText(getByTestId('messageText'), 'Empty');
      fireEvent.press(getByTestId('Send'));

      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('Calls the send handler', () => {
      const messageText = 'Hello World';
      let sendHandler = jest.fn();
      let { getByTestId } = render(<AddMascotModal onSend={sendHandler} />);

      fireEvent.changeText(getByTestId('messageText'), messageText);
      fireEvent.press(getByTestId('Send'));

      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
