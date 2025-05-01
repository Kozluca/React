import React, { useState } from "react";
import '../App.css';

function TodoCreate({onCreateTodo}){

    //Yeni todo'nun içeriğini tutan state. Kullanıcı input alanına yazdığı değeri burada tutuyoruz. Başlangıçta boş bir string olarak ayarlanır.
    const [newTodo , setNewTodo] = useState ('')
    //Todo eklendikten sonra input alanını temizleyen yardımcı fonksiyon.
    const clearInput =()=>{
        setNewTodo('')
    }
    //
    const createTodo =()=>{
        if(!newTodo){
            alert('Lütfen bir todo girin');
            return;
        }
        //Yeni todo objesi oluşturuluyor. id olarak Date.now() kullanılır çünkü Date.now() benzersiz bir ID üretir. content ise kullanıcının girdiği yeni todo'nun içeriğidir.
        const request={
            id: Date.now(), 
            content:newTodo
        }
        //Yeni todo, onCreateTodo fonksiyonuna gönderilir. Bu fonksiyon, App.js bileşenindeki createTodo fonksiyonunu çağıracak ve yeni todo'yu ekleyecektir.
        onCreateTodo(request)
        //Yeni todo başarıyla oluşturulduktan sonra input alanı temizlenir.
        clearInput();
       

    }
    return(
        <div className="todo-create">
            <input 
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
             className="todo-input" type="text"placeholder=" Todo Giriniz" />
             
            <button onClick={createTodo} className="todo-button">Todo Oluştur</button>
        </div>
    )
}
export default TodoCreate