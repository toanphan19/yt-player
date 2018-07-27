import React from 'react';


class SubmitForm extends React.Component {
  render() {
    const inputText = this.props.inputText;

    return (
      <form id="add-playlist">
        <label htmlFor="input-playlist-url">Enter your playlist ID here: (soon to be updated to URL)</label>
        <input type="text"
          className="form-control"
          placeholder="Enter playlist ID"
          value={inputText} />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}


export default SubmitForm;