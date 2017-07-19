import React from "react";
import PropTypes from "prop-types";

const styles = {
  submitBtn: {
    marginLeft: "-3px"
  }
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState(() => ({ input: e.target.value }));
  }

  handleSubmit(){

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="input" onChange={this.handleChange} type="text" />
        <input type="submit" style={styles.submitBtn} />
      </form>
    );
  }
}

export default Search;
