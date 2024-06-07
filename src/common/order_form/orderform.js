import CInput from 'common/components/c_input';
import React, { useState } from 'react';

const OrderForm = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption);
    };
  
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
  return (
    <div className="col-lg-6">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">First name</label>
            <CInput 
            type="text"
            placeholder="Enter your first name"
            />
            {/* <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="Input placeholder"
            /> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Last name</label>
            <CInput 
            type="text"
            placeholder="Enter your lirst name"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Company name (optional)</label>
            <CInput 
            type="text"
            placeholder="Enter your company name"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Country / Region *</label>
            <select
              className="form-select"
              placeholder="Select a date"
              id="select-users"
              value=""
            >
              <option value="1">Chuck Tesla</option>
              <option value="2">Elon Musk</option>
              <option value="3">Paweł Kuna</option>
              <option value="4">Nikola Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Street address *</label>
            <CInput 
            type="text"
            placeholder="Enter your Street address"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
          <CInput 
            type="text"
            placeholder=""
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Town / City *</label>
            <CInput 
            type="text"
            placeholder="Enter your Town / city"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">State / Country *</label>
            <select
              className="form-select"
              placeholder="Select a date"
              id="select-users"
              value=""
            >
              <option value="1">Chuck Tesla</option>
              <option value="2">Elon Musk</option>
              <option value="3">Paweł Kuna</option>
              <option value="4">Nikola Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Postcode / ZIP (optional)</label>
            <CInput 
            type="text"
            placeholder="Enter your Postcode / ZIP"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Phone *</label>
            <CInput 
            type="text"
            placeholder="Enter your Pone No"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Email address *</label>
            <CInput 
            type="email"
            placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="col-md-12">
          <h2>Additional Information</h2>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Order notes (optional)</label>
            <textarea
              className="form-control"
              name="example-textarea-input"
              rows="6"
              placeholder="Note about your order, e.g. Special notes for delivery"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
