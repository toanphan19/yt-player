import React from 'react';


class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleInputTextChange(e) {
    this.props.handleInputTextChange(e);
  }

  handleSubmitButton(e) {
    e.preventDefault();
    this.props.handleSubmitButton(e);
  }

  render() {
    const inputText = this.props.inputText;

    return (
      <div className="container">
        <form id="add-playlist">
          <label htmlFor="input-playlist-url">Enter your favourite playlist URL here:</label>
          <input type="text"
            className="form-control"
            placeholder="Enter playlist ID"
            value={inputText}
            onChange={this.handleInputTextChange}/>
          <button type="submit"
            className="btn btn-outline-success"
            value="Submit"
            onClick={this.handleSubmitButton}>Submit</button>
        </form>
      </div>
    );
  }
}


export default SubmitForm;