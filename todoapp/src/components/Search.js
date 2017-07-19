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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = this.state.input;
    this.props.updateList(item);
    console.log(item);
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

Search.propTypes = {
  updateList: PropTypes.func.isRequired
};

export default Search;
