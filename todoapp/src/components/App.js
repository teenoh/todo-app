import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

const styles = {
  text: {
    margin: "0px 16px"
  }
};

const ListItem = (props) => {
  return (
    <div className="list-group-item row">
      <span className="pull-left pointer">+</span>
      <span style={styles.text}>I want to go to banana island</span>
      <span className="pull-right pointer">-</span>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.updateList = this.updateList.bind(this)
  }

  updateList(item) {
    const newList = [...this.state.list, item];
    this.setState(() => ({ list: newList }));
    console.log(this.state.list)
  }

  render() {
    return (
      <div className="container-fluid col-md-4 col-md-offset-4">
        <center className="row">
          <h3>TO DO LIST APP</h3>
          <br />
          <Search updateList={this.updateList}/>
        </center>
        <br />

        <div className="list-group">
          <ListItem />
        </div>
      </div>
    );
  }
}

export default App;
