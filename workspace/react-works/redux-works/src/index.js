import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import {createStore} from 'redux';

// reducer is a function 
// *** return valud of reducer is kept in the store 
const initialState =["Computer", "Printer"];

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.data];
    case 'DELETE_PRODUCT':
      // action -> {type:'DELETE_PRODUCT', data:1}
      let products = [...state];
      products.splice(action.data, 1);
      return products;      
    default:
      return state;
  }
}

// store here is a local variable 
// we have to put it in global scope so have used 
// window 
const store = createStore(reducer);
window['store'] = store;



const submitHandler = (evt) => {
  evt.preventDefault();

  const product = document.getElementById("product").value;
  const action = {type:"ADD_PRODUCT", data:product};
  store.dispatch(action);
  document.getElementById("product").value ='';
  document.getElementById("product").focus();
}

document.getElementById("frmProduct").onsubmit = submitHandler;



/////////////////update product list////////////////////////

const updateList = () => {
  let products = store.getState();
  let list = products.map((product, index) =>
    '<li class="list-group-item"><button class="btn btn-danger" onclick="deleteProduct('+index+')" >[X]</button>'+product+'</li>'
  )

  let listItems = list.join(''); 
  document.getElementById("productList").innerHTML = listItems;
}

window["updateList"] = updateList;
updateList();

store.subscribe(updateList);

//////////////////////////////////////////////////////////////

window["deleteProduct"] = (index) => {
  const action ={type:"DELETE_PRODUCT", data:index}
  store.dispatch(action);
}