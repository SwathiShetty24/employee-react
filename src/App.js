import Employee from './Employee';

function App() {
  const emp=[
    {id:'e1',name:'Swathi',doj:new Date(2020,8,24),exp:7},
    {id:'e2',name:'Vaish',doj:new Date(2021,1,19),exp:12},
    {id:'e3',name:'Varshini',doj:new Date(2021,10,6),exp:13},
    {id:'e4',name:'Sahana',doj:new Date(2021,7,23),exp:15},
]


  return (
    <div>
    <h1> Let's get started</h1>
    <Employee items={emp}/>
    </div>
  );
}

export default App;
