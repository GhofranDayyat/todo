import {useState} from 'react';
import axios from 'axios';
const useAjax = (url)=>{
const [list , setList]= useState([])
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
    }
const get = ()=>{
    const getAllData = async()=>{let newList= await api('get',url,)
    setList(newList.results)
    // console.log(newList.results);
        }
    getAllData()
    }
const put=(item)=>{
    // item.complete=!item.complete;
    let urlExtended = `${url}/${item._id}`;
    api('put',urlExtended,item)
    console.log(item);
    }
    const deleted = (item) => {
        let extendedUrl = `${url}/${item._id}`;
        api('delete', extendedUrl);
      }; 
return [list, post, get, put, deleted]
}
export default useAjax;