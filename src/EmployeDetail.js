import EmployeeDate from './EmployeeDate';



function EmployeDetail(props){

    return(
        <div>
        <div className="Emp-details">
        <div className='Emp-details-doj'>
        <EmployeeDate date={props.doj}/>
        </div>
        <div><h2>{props.name}</h2></div>
        <div className='Emp-details-exp'>{props.exp}</div>
        
    </div>
        </div>
    );
}
export default EmployeDetail