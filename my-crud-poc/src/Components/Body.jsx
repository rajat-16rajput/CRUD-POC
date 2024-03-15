
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

 

const Body = () =>{

//input text
const [menu, setmenu]=useState("");

// array list of menu items
const[menus,setmenus]=useState([]);

useEffect(()=>{
  let menuString=localStorage.getItem("menus")
  if(menuString){
  let menus=JSON.parse(localStorage.getItem("menus"))
  setmenus(menus)
  }
},[])

const LocalStorage=(params)=>{
  localStorage.setItem("menus",JSON.stringify(menus))
}

  const handleEdit=(e,id)=>{
    let t= menus.filter(i=>i.id === id);
    setmenu(t[0].menu);
    let newmenus=menus.filter(item=>{
      return item.id!=id
    });
    setmenus(newmenus);
    LocalStorage();
  } 

  const handleDelete=(e,id)=>{

    console.log("ID is "+id);
    let newmenus=menus.filter(item=>{
      return item.id!=id
    });
    setmenus(newmenus);
    LocalStorage();
  } 

  const handleAdd=()=>{
    console.log({menu});
    
    setmenus([...menus, {id:uuidv4(), menu}]);
    setmenu("");
    LocalStorage();
  } 

 
 const handleChange=(e)=>{

    setmenu(e.target.value)
  }


return (

<div className="body bg-gray-400"> 

            <div className="container mx-auto my-20 bg-orange-200 min-h-[80vh] w-1/2">
              
                  <div className="addmenu mt-10">
                      <h2 className="text-lg font-bold mt-10">Add Items</h2>
                      <input name={menu.id} onChange={handleChange} value={menu} type="text"className="my-10" />
                      <button onClick={handleAdd} className="bg-orange-300 hover:bg-green-600 mx-4 text-sm font-bold px-3 py-2 rounded-md">Save</button>
                  </div>
                  <>

<h2 className="text-lg font-bold">Your Items</h2>

<div className="menus">
 {menus.length===0 && <div>No items to display</div>}
       {menus.map( (item)=>{

         return(
           <div key={item.id} className="menu flex w-2/4 justify-between">
            
     {/* // whenever the user will enter text and hit save this {menu} which is a state variable will get updated */}
               <div className="text  my-3 flex h">{item.menu }</div>
               <div className="buttons flex my-2 h-full">
                 <button onClick={(e)=>{handleEdit(e,item.id)}}  className="bg-orange-300 hover:bg-orange-400 mx-2 text-sm font-bold px-3 py-2 rounded-md">Edit</button>
                 <button onClick={(e)=>{handleDelete(e,item.id)}}  className="bg-orange-300 hover:bg-red-400 mx-2 text-sm font-bold px-3 py-2 rounded-md">Delete</button>
               </div >  
           </div>)
       })}  
 </div>
 </>
            </div>        
</div>

)
};


export default Body;