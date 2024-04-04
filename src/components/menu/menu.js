import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://103.183.75.112/api/directory/dataList');
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Array.isArray(data)
        ? data.map(element => {
            return <h1 key={element.id} className='menu__title'>{element.title}</h1>;
          })
        : console.log('this is not array')}
    </div>
  );
}

export default MenuComponent;