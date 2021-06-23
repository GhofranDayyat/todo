import {useState,useEffect} from 'react';
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
    setList( [...list, item]);
    }


const get = ()=>{
    const getAllData = async()=>{let newList= await api('get',url,)
    setList(newList.results)
        }
    getAllData()
    setList([list]);

    }


const put=(id,updateText)=>{
    let urlExtended = `${url}/${id}`;
    api('put',urlExtended,updateText)
    // setList( [list]);
    let updateitem = list.filter(i => i._id === id)[0] || {};
    if (id) {
        updateitem.text = updateText;
        let updatelist = list.map(listItem => listItem._id === id ? updateitem : listItem);
        setList(updatelist);
    }
    }


    const deleted = (item) => {
        let extendedUrl = `${url}/${item._id}`;
        api('delete', extendedUrl);
        let deletedList = list.filter(el=>item._id!==el._id)
        setList(deletedList)
      }; 


return [list, post, get, put, deleted]
}


export default useAjax;