import React from "react";
import { useState,useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo,setTodo] = useState("")
	const [list,setList] = useState([])
	const [count,setCount] = useState(list.length)

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && todo != "") {
				setList([...list,todo])
				setTodo("")		
		}
	  };

	  useEffect(()=>{
		setCount(list.length)
	  },[list])

	return (
	<div className="container-fluid vh-100">
		<div className=" d-flex  justify-content-center align-items-center h-100 flex-column">
			<p className="title">todos</p>
		<div className="col-3 d-flex justify-content-center align-items-center bg-light todo-body flex-column">
				<input
					className="col-12 ps-4"
					placeholder="What needs to be done?"
					type="text"
					onChange={(e)=>{
						setTodo(e.target.value)
					}}
					value={todo}
					onKeyDown={handleKeyDown}
				/>
				<ul className="col-12">
					{list.map((item,index)=>{
						return <div>
							 <li className="ps-4 col-12" key={index}>{item}
							 	<div className="ms-auto me-2"><i className="fas fa-check" onClick={()=>{
										const updatedList = [...list]; 
										updatedList.splice(index, 1);
										setList(updatedList);
										}}>
									</i> </div>
									
						 		</li>
						</div>
					})}
				</ul>
				<div className="count-task col-12">
					<p className="ps-2">{count} item left</p>
				</div>	
				
		</div>
		<div className="page"></div>	
		<div className="page second "></div>	
		</div>
	</div>	
	);
};

export default Home;
