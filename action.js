export const addTodo = (data)=>{
    return {
        type: "ADD_TODO",
        payload : data
    }
}

 export const Delete = (id)=>{
     return {
         type :"DELETE",
         payload : id
     }
 }