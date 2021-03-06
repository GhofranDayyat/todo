import React, { useState,useContext } from 'react';

export const ListContext = React.createContext();


function ListProvider(props) {
  const [display, setDisplay] = useState(false);
  const [pagination ,setPagination] =useState(3);
  const [currentPage , setCurrentPage] = useState(1)
  const [sorting , setSorting] = useState('')


  const state = {
    display,
    setDisplay,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    sorting,
    setSorting
  };
  
  return (
        <ListContext.Provider value={state}>
          {props.children}
        </ListContext.Provider>
    
  );
}

export default ListProvider;

























// import React from 'react';


// export const ListContext= React.createContext(); // create context


// class ListProvider extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             displyComplete:true,
//             caseDisply:'Show Complete',
//             storing:'',
//             taskPerScreen:0,

//         }
//     }

//     toggleDisply=()=>{
//         this.setState({displyComplete: this.state.displyComplete?false:true , caseDisply:this.state.caseDisply==='Show Complete'?'Hide Complete':'Show Complete'})
//     }

//     render(){
//         return(
//             <>

//             <ListContext.Provider value={this.state}>
//                 {this.props.children}
//             </ListContext.Provider>
//             </>
//         )
//     }
// }

// export default ListProvider; 

