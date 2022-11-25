
import React ,{useState}from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Typography,
  } from '@material-ui/core';
  import DatePicker from 'react-datepicker'
  import "react-datepicker/dist/react-datepicker.css";

 

  

 
const Addtodo=()=>{
	const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [formData, setFormData] = useState({
    task: "",
    taskdate:"",
    important:0,
    success:0,
  });

  const {
    task,
    taskdate,
    important,
    success,
  } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      
    });
  };
    
    const today = new Date()
    const selectDateHandler = (d) => {
        setDate(d)
      }
      
      const Add = (evt) => {
        var tempdate =  date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        setFormData({
          ...formData,
          taskdate:tempdate
          
        });
       
      if(task !="" && taskdate!=""){
      //  console.log(formData);
       var data = []
       var temp = JSON.parse(localStorage.getItem("Todo"));
      //  console.log(temp);
       
       if(temp != null){
        for(var i =0;i<temp.length;i++){
            data.push(temp[i])
           }
       }
        
       setFormData({
        ...formData,
        task:"",
        date:""
        
      });
        data.push(formData)
        // console.log(data);
        localStorage.setItem("Todo", JSON.stringify(data));
    
        setOpen(false)
        window.location.reload();
      }
      else{
        alert("Make sure Everything is filled");
      }
    
    }



	return (
        
		<>
        <Dialog open={open}>
      <DialogContent>
        <Typography>
        <div class="pb-2">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row align-items-center">
                    <input type="text" name="task" class="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Add new..." value={task} onChange={handleChange} required/>
                        
                  </div>
                </div>
              </div>
            </div>
        </Typography>
        
      </DialogContent>
      <DialogActions>
      <i class="fas fa-calendar-alt fa-lg m-2 " onClick={()=>console.log(date)}></i>
                        <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={date}
                        onChange={selectDateHandler} 
                        minDate={today}
                        todayButton={"Today"}
                        popperPlacement={"top-end"}/>
        <Button color="primary" variant="contained" onClick={()=>setOpen(false)}>
          Cancel
        </Button>
        <Button type="submit" color="secondary" variant="contained" onClick={Add}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
        <i className="fa-solid fa-circle-plus fa-beat fa-3x bg-info" title="Create todo " id="addpost"  onClick={(event)=>setOpen(true)}></i>
       
        </>
		


	)
}

export default Addtodo;