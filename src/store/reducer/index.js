

const INITIAL_STATE = {
    users: [],
    students:[],
    companies:[],
    all:[],
  
    current_user : 
   [ ]
    ,
    userDetails :[{
       
    }]
}

export default (state = INITIAL_STATE,action)=>{
   
    switch (action.type){
      case "SETSTUDENTS":
          return({
              ...state,
              students:action.payload
          })

          case "SETCOMPANIES":
          return({
              ...state,
              companies:action.payload
          })

          case "SETALL":
          return({
              ...state,
              all:action.payload
          })



          case "SETCURRENT":
          return({
              ...state,
              current_user:action.payload
          })
  }
    return state;

}