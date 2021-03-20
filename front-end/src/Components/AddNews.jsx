import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class AddNews extends Component {
  state = {
    title: "",
    Content: "",
    tag: "",
    Author: "",
    file: "",
    path: ""
  };
  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = e => {
    this.setState({ tag: e.target.value });
  };
  handleFile = e => {
    this.setState({ file: e.target.files[0] })
    console.log(e.target.files[0])
  }
  submitFile = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file-up", this.state.file);
    const config = {
      method: "POST",
      body: formData
    }
    fetch('http://localhost:8000/fileup', config)
    this.submitForm()
  }
  submitForm = (e) => {
    console.log("submit");
    const SingleNews = {
      title: this.state.title,
      Content: this.state.Content,
      Date: moment().format("YYYY/MM/DD-HH:mm:ss"),
      views: 0,
      Author: this.state.Author,
      tag: this.state.tag,
      fileName: this.state.file.name
    };
    const reqConfi = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(SingleNews)
    }
    fetch("http://localhost:8000", reqConfi)
    .then(res => res.json())
    .then(res => {
      this.props.dispatch({ type: "get_news", news: res.reverse() });
    });
    console.log(SingleNews)
  };

  render() {
    return (
      <div className="add-news">
        <form
          style={form_style}
          onSubmit={this.submitFile}>
          <div className="form-group">
            <label forhtml="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="title"
              value={this.state.title}
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            <label forhtml="exampleInputEmail1">Content</label>
            <textarea
              className="form-control"
              name="Content"
              value={this.state.Content}
              onChange={this.handleFormChange}
              rows="3"></textarea>
          </div>
          <div className="form-group">
            <label forhtml="exampleInputEmail1">Author</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="Author"
              value={this.state.Author}
              onChange={this.handleFormChange}
            />
          </div>
          <form action="" onSubmit={this.submitFile}>
          <div className="form-group">
            <label forhtml="exampleInputEmail1">image</label>
            <input
              type="file"
              className="form-control"
              aria-describedby="emailHelp"
              name="file-up"
              onChange={this.handleFile}
            />
          </div>
          </form>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tag"
              value="Political"
              onClick={this.handleFormChange}
            />
            <label className="form-check-label" forhtml="inlineRadio1">
              Political
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tag"
              value="Economic"
              onClick={this.handleFormChange}
            />
            <label className="form-check-label" forhtml="inlineRadio2">
              Econmoic
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tag"
              value="Sports"
              onClick={this.handleFormChange}
            />
            <label className="form-check-label" forhtml="inlineRadio2">
              Sports
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const form_style = {
  width: "50%",
  margin: "40px auto"
};

export default connect()(AddNews);
