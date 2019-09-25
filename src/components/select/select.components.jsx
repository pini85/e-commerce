import React, { Component } from "react";

class Select extends Component {
  state = { value: "" };
  componentDidMount() {
    this.setState({ value: this.props.quantity });
  }
  // changeValue=()=>{
  //   this.setState({value:})

  // }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.props.handleChange}>
          <option onClick={this.state.value} value="1">
            1
          </option>
          <option onClick={this.state.value} value="2">
            2
          </option>
          <option onClick={this.state.value} value="3">
            3
          </option>
          <option onClick={this.state.value} value="4">
            4
          </option>
          <option onClick={this.state.value} value="5">
            5
          </option>
          <option onClick={this.state.value} value="6">
            6
          </option>
          <option onClick={this.state.value} value="7">
            7
          </option>
          <option onClick={this.state.value} value="8">
            8
          </option>
          <option onClick={this.state.value} value="9">
            9
          </option>
          <option onClick={this.state.value} value="10">
            10
          </option>
        </select>
      </div>
    );
  }
}

export default Select;
