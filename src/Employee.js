import EmployeDetail from "./EmployeDetail";


function Employee(props){

    return(
    <div className='Employee'>
    <h1>Employee Details</h1>
      <EmployeDetail name={props.items[0].name} doj={props.items[0].doj} exp={props.items[0].exp}></EmployeDetail>
      <EmployeDetail name={props.items[1].name} doj={props.items[1].doj} exp={props.items[1].exp}></EmployeDetail>
      <EmployeDetail name={props.items[2].name} doj={props.items[2].doj} exp={props.items[2].exp}></EmployeDetail>
      <EmployeDetail name={props.items[3].name} doj={props.items[3].doj} exp={props.items[3].exp}></EmployeDetail>
    </div>

    );
}
export default Employee;