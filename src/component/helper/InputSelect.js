import React from 'react';

function InputSelect({option}) {
  return <div className="footer-antd">
  <select className="footer-select">
    <option value="">{ option || 'Beril & Kaan Doğu'}</option>
  </select>
</div>
}

export default InputSelect;
