import { useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {
 
  // todos adında bir state oluşturuluyor. Başlangıçta boş bir array ile başlatılıyor. Bu, todo'ların tutulacağı bir veri yapısı olacak.

  const[todos,setTodos] = useState([]);

  //Bu fonksiyon yeni bir todo eklemek için kullanılıyor. newTodo parametresi ile yeni todo'yu alıp setTodos fonksiyonu ile todos array'ine ekliyoruz.
  const createTodo = (newTodo) =>{
    setTodos([...todos , newTodo]);
  }
  //removeTodo fonksiyonu, TodoId'yi alıp o ID'ye sahip olan todo'yu listeden çıkarır.
  const removeTodo = (TodoId)=>{
    //filter fonksiyonu kullanarak TodoId'ye sahip olan todo'yu listeden çıkarıyoruz ve kalan todo'ları setTodos ile güncelliyoruz.
    setTodos([... todos.filter((todo) => todo.id !== TodoId)]);
  }
  //updateTodo fonksiyonu, bir todo'yu güncellemek için kullanılıyor. Yeni todo'yu alıp eski todos array'inde ilgili todo'yu güncelliyoruz.
  const updateTodo = (newTodo) =>{
    //map fonksiyonu ile tüm todos array'ini dolaşıp, güncellenmiş todo'yu bulup, sadece o todo'yu güncelliyoruz.
    const updatedTodos = todos.map((todo) =>{
      //Eğer mevcut todo'nun ID'si, güncellenmek istenen todo'nun ID'siyle eşleşmiyorsa, o todo'yu değiştirmiyoruz.
      if(todo.id !== newTodo.id){
        return todo;
      }
      //Eğer todo'nun ID'si eşleşiyorsa, yeni todo'yu geri döndürüyoruz.
      return newTodo;
    })
    //Güncellenmiş todos array'ini setTodos fonksiyonu ile state'e kaydediyoruz.
    setTodos([...updatedTodos]);
  }

  return (
    <div className='App'>
      <div className='first-side'>
      {/* TodoCreate bileşenine createTodo fonksiyonunu prop olarak veriyoruz. Bu, yeni todo'ları oluşturabilmesini sağlar. */}
      <TodoCreate onCreateTodo = {createTodo} />
      {/* TodoList bileşenine todos (todo listesi), onRemoveTodo (todo silme fonksiyonu) ve onUpdateTodo (todo güncelleme fonksiyonu) props olarak veriyoruz. */}
      <TodoList todos = {todos}  onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo}/>
      </div>
     
    </div>
     
  )
}

export default App
