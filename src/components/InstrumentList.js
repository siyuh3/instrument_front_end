import React, { useState, useEffect } from 'react';

function InstrumentList() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/instruments') // 发送HTTP GET请求到后端API
      .then(response => response.text())
      .then(text => {
        console.log(text);  // 打印原始响应文本
        return JSON.parse(text);  // 然后尝试解析文本为JSON
      })
      // .then(response => response.json()) // 解析响应为JSON格式
      .then(data => setInstruments(data)) // 将数据存储到状态中
      .catch(error => console.error('Error11111:', error));
  }, []);

  return (
    <div>
      <h1>乐器列表</h1>
      <ul>
        {instruments.map(instrument => (
          <li key={instrument.id}>
            <h3>{instrument.name}</h3>
            <p>{instrument.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstrumentList;
