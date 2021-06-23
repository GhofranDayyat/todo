import {useState,useEffect} from 'react';
import axios from 'axios';




const useAjax = (url)=>{

const [list , setList]= useState([])

const hideCompleted=()=>{
      let deletedList = list.filter(el=>!el.complete)
    // let complete=list.map(listItem => listItem.complete ? listItem : deletedList);


console.log(deletedList,'/*/*//////////////');
// let update = deletedList.map(item=>{})
  setList(deletedList)
//   api('put',`${url}/${complete._id}`,complete)
}

const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
  
    if (item._id) {
      item.complete = !item.complete;
      let updatelist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatelist);
      api('put',`${url}/${item._id}`,item)
    }
    // setList( list:);

  };
  
const api = async (method, url , item)=>{
    const toDo= await axios({
        method: method,
        url: url,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: item,
        })
    return toDo.data
    }


const post=(item)=>{
    api('post',url,item)
    setList( [...list, item]);
    }


const get = ()=>{
    const getAllData = async()=>{let newList= await api('get',url,)
    setList(newList.results)
        }
    getAllData()
    // setList([list]);

    }


const put=(id,updateText)=>{
    let urlExtended = `${url}/${id}`;
    
    
    let item = list.filter(i => i._id === id)[0] || {}; 
    if (item._id) {
        item.text = updateText;
        let updatelist = list.map(listItem => listItem._id === item._id ? item : listItem);
        api('put',urlExtended,item)
      setList(updatelist);
    }
    }


    const deleted = (item) => {
        let extendedUrl = `${url}/${item._id}`;
        api('delete', extendedUrl);
        let deletedList = list.filter(el=>item._id!==el._id)
        setList(deletedList)
      }; 


return [list,hideCompleted,toggleComplete, post, get, put, deleted]
}


export default useAjax;