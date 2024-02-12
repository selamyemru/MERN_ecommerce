// import React from 'react'
//in order to make dynamic and reusebale  use props
function Home( ) {
// const fruits=["apple" ,"mongo","banana","orange"]
const fruits=[
    {name:'apple',
     price:"23"
    },
    {name:'amongo',
     price:"29"
    },
    {name:'orange',
     price:"20"
    }
]
  return (
  <>
  <h1> hello 
   <ul>
   {fruits.map(fruit=> <li key={fruit.name}>{fruit.name} {fruit.price}</li>)}
   </ul></h1>
 
  </>
  );
  
}

export default Home;
