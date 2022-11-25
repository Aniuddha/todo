

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Typography,
  } from '@material-ui/core';
//   import DatePicker from 'react-datepicker'
  import "react-datepicker/dist/react-datepicker.css";
const Body=()=>{
	const [data ,setdata]=useState(JSON.parse(localStorage.getItem("Todo"))) 
	var displaydata = data
	// console.log(data)
	const [open, setOpen] = useState(false);
	const [id, setId] = useState();
	


	



	const changedata=(index,d)=>{
		
		if(d==='important'){
		if(displaydata[index].important === 0){
			displaydata[index].important =1
		}
		else{
			displaydata[index].important=0
		}}
		else if(d==='success'){
			if(displaydata[index].success === 0){
				displaydata[index].success =1
			}
			else{
				displaydata[index].success=0
			}}
			setdata(displaydata)
			console.log(data)
			localStorage.setItem("Todo", JSON.stringify(data));
			window.location.reload();
	}


	const remove=(index)=>{
		data.splice(index, 1)
		localStorage.setItem("Todo", JSON.stringify(data));
			window.location.reload();
	}


	const Edit=(index)=>{
       setOpen(true);
	   setId(index)
		
	}
	const handleChange=(evnt)=>{
		alert("Can not modify! Modification code not yet finished")
	}
	
	
	const Display=()=>{
		return(
			<div class = "container-fluid ">
				{id !=null ?(<Dialog open={open}>
      <DialogContent>
        <Typography>
        <div class="pb-2">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row align-items-center">
                    <input type="text" name="task" class="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Add new..." value={displaydata[id].task} onChange={handleChange} required/>
                        
                  </div>
                </div>
              </div>
            </div>
        </Typography>
        
      </DialogContent>
      <DialogActions>
      <i class="fas fa-calendar-alt fa-lg m-2 "></i>
	  {displaydata[id].taskdate}
                        {/* <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={(displaydata[index].taskdate
							)}
                        onChange={selectDateHandler} 
                        minDate={today}
                        todayButton={"Today"}
                        popperPlacement={"top-end"}/> */}
        <Button color="primary" variant="contained" onClick={()=>setOpen(false)}>
          Cancel
        </Button>
        <Button type="submit" color="secondary" variant="contained" onClick={()=>changedata(displaydata)}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>):("")}
				
         <div class = "row">
		 {data != null ? (
          
		  data.map((pro,index) => {
			return (
				<div class = "  col-xs-6 col-sm-4 col-md-6 col-lg-4 mt-1" >
				<div class="card text-white bg-info mb-3" >
					
				<div class="card-header d-flex justify-content-between">
				<div class="d-flex ">
					<div onClick={()=>changedata(index,'important')}>{pro.important === 0?(<i class="fa-solid fa-star m-1 " title="Important"></i>):(<i class="fa-solid fa-star fa-2x fa-shake  m-1" title="Important" id="star" ></i>)}</div>
					
					<h6 class="m-1" >{pro.taskdate} </h6>
				</div>
				<div class="d-flex ">
					<i class="fa-solid fa-pen-to-square m-1" title="Edit" onClick={()=>Edit(index)}></i>
					<div onClick={()=>changedata(index,'success')}>{pro.success === 0?(<i class="fa-solid fa-circle-check  m-1" title="Completed"></i>):(<i class="fa-solid fa-circle-check fa-2x bg-white  m-1" title="Completed" id="success" ></i>)}</div>
					
					<i class="fa-solid fa-trash m-1" title="Delete" onClick={()=>remove(index)}></i>
				</div>
				</div>
					<div class="card-body">
						<h5 class="card-title">{pro.task}</h5>
						
					</div>
				</div>
				</div>
  
			);
		  })
		) : (
			<div class="card border-bottom-0">
			
			<div class="card-body cart">
					<div class="col-sm-12 empty-cart-cls text-center">
					<i class="fa-sharp fa-solid fa-clipboard-question fa-xl"></i>
						<h3><strong>Your ToDo List is Empty</strong></h3>							
					</div>
			</div>
			</div>
		)}         
         </div>
      </div>)
	}
		
	return (
		
		<Display/>
	)
}
export default Body;