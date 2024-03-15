

const MenuList=({todos})=>{

    
    
    const handleEdit=(e,id)=>{
        let t= todos.filter(i=>i.id === id);
        setTodo(t[0].todo);
        let newTodos=todos.filter(item=>{
          return item.id!=id
        });
        setTodos(newTodos);
        LocalStorage();
      } 
      
      const handleDelete=(e,id)=>{
    
        console.log("ID is "+id);
        let newTodos=todos.filter(item=>{
          return item.id!=id
        });
        setTodos(newTodos);
        LocalStorage();
      } 
    

return(
<>

<h2 className="text-lg font-bold">Your Items</h2>

<div className="todos">
 {todos.length===0 && <div>No items to display</div>}
       {todos.map( (item)=>{

         return(
           <div key={item.id} className="todo flex w-2/4 justify-between">
            
     {/* // whenever the user will enter text and hit save this {todo} which is a state variable will get updated */}
               <div className="text  my-3 flex h">{item.todo }</div>
               <div className="buttons flex my-2 h-full">
                 <button onClick={(e)=>{handleEdit(e,item.id)}}  className="bg-orange-300 hover:bg-orange-400 mx-2 text-sm font-bold px-3 py-2 rounded-md">Edit</button>
                 <button onClick={(e)=>{handleDelete(e,item.id)}}  className="bg-orange-300 hover:bg-red-400 mx-2 text-sm font-bold px-3 py-2 rounded-md">Delete</button>
               </div >  
           </div>)
       })}  
 </div>
 </>
)
    }

    export default MenuList;