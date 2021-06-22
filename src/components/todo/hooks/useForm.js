import {useState} from 'react';

const useForm=(props)=>{

const [item,setItem] = useState({})

  const handleInputChange = e => {
    setItem({ ...item,  [e.target.name]: e.target.value});

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    item.difficulty?item.difficulty=item.difficulty:item.difficulty=e.target.difficulty.value
    props.handleSubmit(item);
    const addItem = {};
    setItem(addItem);
};

return [handleInputChange, handleSubmit ,item]

}


export default useForm;
