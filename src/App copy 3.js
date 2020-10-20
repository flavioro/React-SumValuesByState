import React, { useState } from "react";

let elements = [{ title: "Monaco", amount: 990, id: 1}];

const Sum = () => {
  
  const [ totalAmount, setTotalAmount ] = useState(0);

  const handleChangePrice = (price, id, title) => {
    const amount = parseInt(price, 10);
    const projectCreate = { title, amount, id };
  
    const projectIndex = elements.findIndex(findProject => findProject.id === id)
    // console.log('projectIndex ', projectIndex);
  
    if (projectIndex < 0) {
      elements.push(projectCreate);
    } 
    else {
      console.log('projectIndex delete', projectIndex);
      elements.splice(projectIndex, 1);
    }
  
    calculate();
    // console.log(elements)
  }

  const calculate = () => {
    let sumAmount = 0;
    elements.forEach(item => sumAmount += item.amount);
 
    // console.log('sumAmount', sumAmount)

    setTotalAmount(sumAmount);

    // console.log('totalAmount', totalAmount);
  }
  
    return (
      <div>
        <h3>Cash control 'app'</h3>
        <p /><p />

        <li> Eletrico:
          <input
            style={{ width: 70, marginBottom: 2 }}
            type="number"
            value="990"
            onChange={(e) => handleChangePrice(e.target.value, 2, "Eletrico")}
          />
        </li>

        <li> Interiores:
          <input
            style={{ width: 70, marginBottom: 2 }}
            type="number"
            value="1190"
            onChange={(e) => handleChangePrice(1190, 3, "Interiores")}
          />
        </li>

        <p>
          Total sum: <span>{`$ ${totalAmount}`}</span>
        </p>
        <button onClick={calculate} style={{ cursor: "pointer" }}>calculate</button>
      </div>
    );
}


export default Sum;