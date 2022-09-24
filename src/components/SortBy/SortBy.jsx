import React from 'react';

const SortBy = () => {
  const sorts = ['ASC','DESC'];
  return (
    <div className='flex gap-4 m-4'>
      {
        sorts.map(el=>
        <button 
          className='border border-2 rounded p-2' 
          onClick={()=>console.log(el)}
          key={el}>
            {el}
        </button>)
      }
    </div>
  );
}

export default SortBy;
