import React, { useState } from "react";

const Sum = () => {
  let elements = [{ title: "Monaco", amount: 990, id: 1}];
  const [ totalAmount, setTotalAmount ] = useState(0);

  const handleChangePrice = (price, id, title) => {
    const amount = parseInt(price, 10);
    let project = { title, amount, id };
  
    const projects = elements.find(findProject => findProject.id === id)
    const projectFilter = elements.filter(findProject => findProject.id !== id)
    // console.log('filter ', projectFilter);
  
    if (!projects) {
      let projectsNew = elements;
      projectsNew.push(project);
        elements = projectsNew;
    } else {
        elements = projectFilter;
    }
  
    calculate();
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
        {console.log(elements)}

        <p>
          Total sum: <span>{`$ ${totalAmount}`}</span>
        </p>
        <button onClick={calculate} style={{ cursor: "pointer" }}>calculate</button>
      </div>
    );
}


export default Sum;
