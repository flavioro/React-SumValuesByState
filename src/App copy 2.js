import React from "react";

class Sum extends React.Component {
  constructor() {
    super();
    this.state = {
      // elements: [{ title: "Monaco", amount: 100 }, { title: "Sidney", amount: 300 }],
      elements: [{ title: "Monaco", amount: 990, id: 1 }],
      value: "",
      numberValue: "",
      totalAmount: 0,
    };
    this.handleChangePrice = this.handleChangePrice.bind(this);
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

  handleChangePrice(price, id, title) {
    
    const amount = parseInt(price, 10);
    let element = { title, amount, id };

    const project = this.state.elements.find(findProject => findProject.id === id)
    const projectFilter = this.state.elements.filter(findProject => findProject.id !== id)
    console.log('filter ', projectFilter);

    if (!project) {
      this.setState({
        elements: [ ...this.state.elements, element]
      });
    } else {
      this.setState({
        elements: [ ...projectFilter]
      });
    }


    this.calculate();
  }

  render() {
    return (
      <div>
        <h3>Cash control 'app'</h3>
        <p /><p />

        <li> Eletrico:
          <input
            style={{ width: 70, marginBottom: 2 }}
            type="number"
            value="990"
            onChange={(e) => this.handleChangePrice(e.target.value, 2, "Eletrico")}
          />
        </li>

        <li> Interiores:
          <input
            style={{ width: 70, marginBottom: 2 }}
            type="number"
            value="1190"
            onChange={(e) => this.handleChangePrice(1190, 3, "Interiores")}
          />
        </li>
        {console.log(this.state.elements)}

        <p>
          Total sum: <span>{`$ ${this.state.totalAmount}`}</span>
        </p>
        <button onClick={this.calculate} style={{ cursor: "pointer" }}>calculate</button>
      </div>
    );
  }
}

export default Sum;
