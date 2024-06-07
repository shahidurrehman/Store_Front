import React from 'react';

const TableComponent = ({ thValues, tdValues }) => {
  return (
    <div className='card'>
      <div className="table-responsive">
        <table className="table table-vcenter card-table">
          <thead>
            <tr>
              {thValues.map((value, index) => (
                <th key={index}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {tdValues.map((value, index) => (
                <td key={index} className={index === 1 ? 'image-cell' : ''}>
                  {index === 1 ? <img src={value} alt="Product" /> : value}</td>
              ))}
            </tr>
            <tr>
              {tdValues.map((value, index) => (
                <td key={index} className={index === 1 ? 'image-cell' : ''}>
                  {index === 1 ? <img src={index === 1 ? '../assets/img/banner1.png' : value} alt="Product" /> : value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
