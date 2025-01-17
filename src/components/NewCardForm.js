import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './NewBoardForm.css';

const NewCardForm = ( props ) => {
    const [formField, setFormField] = useState({
        message: '',
    });


  const handleSubmit = (event) => {
    event.preventDefault();

    props.addCard(formField);
    setFormField({ message: ''});
    };

    const onFieldChange = (event) => {
      setFormField({
        ...formField,
        [event.target.name]: event.target.value
      });
    };

    if (props.selectedBoard.boardId === 0) {
      return null;
    }


  return (
    <div>
      <h1> Create New Card Here </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='board'>Board:</label>
          <p>{props.selectedBoard.title}</p>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formField.message}
            onChange={onFieldChange}
            required
          />
        </div>
        <button type="submit" value="Add Card" disabled={!formField.message}>
          Create a New Card
        </button>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default NewCardForm;
