import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

const styles = {
  text: {
    margin: "0px 16px"
  }
};

const ListItem = props => {
  return (
    <div className="list-group-item row">
      <span className="pull-left pointer">+</span>
      <span style={styles.text}>
        {props.text}
      </span>
      <span className="pull-right pointer" onClick={() => props.remove(props.text)}>-</span>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.updateList = this.updateList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  updateList(item) {
    const newList = [...this.state.list, item];
    this.setState(() => ({ list: newList }));
    console.log(this.state.list);
  }

  removeItem(value){
    const newList = this.state.list.filter(item => item !== value)
    this.setState(() => ({list: newList}))
  }

  render() {
    return (
      <div className="container-fluid col-md-4 col-md-offset-4">
        <center className="row">
          <h3>TO DO LIST APP</h3>
          <br />
          <Search updateList={this.updateList} />
        </center>
        <br />

        <div className="list-group">
          {this.state.list !== [] &&
            this.state.list.map((item, index) =>
              <ListItem key={index} text={item} remove={this.removeItem} />
            )}
        </div>
      </div>
    );
  }
}

export default App;
