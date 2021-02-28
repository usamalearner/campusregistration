
import database from '@react-native-firebase/database';


 

export  function get_students(){
    return (dispatch)=>{
        let students = []
       database().ref('students').on('child_added',(data)=>{
            students.push(data.val())
            console.log("firebase_data=>",students)
            dispatch({type:"SETSTUDENTS",payload:students})
        })
        
    }
}

export function get_companies(){
    return (dispatch)=>{
        let companies = []
       database().ref('companies').on('child_added',(data)=>{
            companies.push(data.val())
            console.log("firebase_data=>",companies)
            dispatch({type:"SETCOMPANIES",payload:companies})
        })
        
    }
}

export  function get_all(){
    return (dispatch)=>{
        let all = []
       database().ref('/').on('child_added',(data)=>{
           all.push(data.val())
            console.log("firebase_data=>",all)
            dispatch({type:"SETALL",payload:all})
        })
        
    }
}


 
  

function signUp(data, props) {
    return (dispatch) => {
     
                // dispatch({type :"SETUSER",payload: data})

               
        dispatch({ type: "SETUSER", payload: data });
    };

}



export {
    // get_users,
 
    signUp,
    // get_all,
    // get_companies,
    // get_students,
 
  
}