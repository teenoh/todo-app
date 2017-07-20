import React from "react";
import Search from "./Search";

const styles = {
  text: {
    margin: "0px 8px"
  },
  listItems: {
    margin: "0px 5px"
  },
  top: {
    marginTop: 16
  },
  div: {
    display: "inline"
  }
};

const ListItem = props => {
  return (
    <div className="row list-group-item">
      <div className="col-xs-1 pointer" style={styles.div}>
        +
      </div>
      <div className="col-xs-8 clearfix" >
        {props.text}
      </div>
      <div
        className="col-xs-1 pull-right pointer"
        style={styles.div}
        onClick={() => props.remove(props.text)}>
        -</div>
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

  removeItem(value) {
    const newList = this.state.list.filter(item => item !== value);
    this.setState(() => ({ list: newList }));
  }

  render() {
    return (
      <div className="col-xs-offset-2 col-xs-8 well" style={styles.top}>
        <center className="row">
          <h3>TO DO LIST APP</h3>
          <br />
          <Search updateList={this.updateList} />

          <br />
        </center>
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
