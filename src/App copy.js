import React from "react";

class Sum extends React.Component {
  constructor() {
    super();
    this.state = {
      elements: [{ title: "main work", amount: 0 }, { title: "freelance", amount: 0 }],
      value: "",
      numberValue: "",
      totalAmount: 0,
    };
    this.adder = this.adder.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }
  adder() {
    this.setState({
      elements: [...this.state.elements, { title: this.state.value, amount: 0 }],
      value: '',
    });
  }
  reset() {
    this.setState({
      elements: this.state.elements.slice(1, 1),
      totalAmount: 0,
      value: '',
    });
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  calculate = () => {
    let totalAmount = 0;
    this.state.elements.forEach(item => {
      totalAmount += item.amount;
    });

    this.setState({
      totalAmount
    })
  }

  handleChangeNumber(e, index, title) {
    
    const amount = parseInt(e.target.value, 10);
    const element = { title, amount };

    this.setState({
      elements: [
        ...this.state.elements.slice(0, index),
        Object.assign({}, this.state.elements[index], element),
        ...this.state.elements.slice(index + 1)
      ]
    });
  }

  delCurrent(index) {
    this.state.elements.splice(index, 1);
    this.setState({
      elements: this.state.elements
    }, this.calculate);
  }
  render() {
    const list = this.state.elements.map((element, index) => {
      return (
        <li key={index}>
          {element.title}:{" "}
          <input
            style={{ width: 70, marginBottom: 2 }}
            type="number"
            value={this.state.elements[index].amount}
            onChange={(e) => this.handleChangeNumber(e, index, element.title)}
          />
          <span>USD</span>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => this.delCurrent(index)}
          >
            &times;
          </button>
        </li>
      );
    });
    return (
      <div>
        <h3>Cash control 'app'</h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="your income"
        />
        <button style={{ cursor: "pointer" }} onClick={this.adder}>
          add to list
        </button>
        <button style={{ cursor: "pointer" }} onClick={this.reset}>
          reset
        </button>
        <ol>{list}</ol>
        <p>
          Total sum: <span>{`$ ${this.state.totalAmount}`}</span>
        </p>
        <button onClick={this.calculate} style={{ cursor: "pointer" }}>calculate</button>
      </div>
    );
  }
}

export default Sum;
