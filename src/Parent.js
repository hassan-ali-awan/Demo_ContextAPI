import React from 'react';
import Child from './Child';
function Parent(a) {
  return (
    <div >
        This is parent
          <Child num1={a.num}></Child>
    </div>
  );
}

export default Parent;
