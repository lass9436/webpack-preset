import '../stylesheet/style.css';
import '../stylesheet/style.scss';
//import './errortest.js';

const getTodos = () => import('./api')

console.log("??");

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  getTodos().then(({ fetchTodos }) => {
    fetchTodos().then(resp => console.log(resp))
  })
})