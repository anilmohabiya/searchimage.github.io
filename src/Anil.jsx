import React from 'react';

const Anil =(props)=>{

    const img=`https://source.unsplash.com/600x300/?${props.name}`;
    return(
        <>
     
          <img src={img} alt="search"/>
        </>

        
    );
};
export default Anil;