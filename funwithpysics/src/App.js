
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function Force(){
    var a = parseInt(document.getElementById("mass").value);
    var b = parseInt(document.getElementById("acce").value);
    var F = a*b;
    var re = document.getElementById("result");
    var temp = "Force = " + a+" x "+b+"<br/>";
    temp += "Force = "+F+"N";
    re.innerHTML = temp;

   } 

  return (
  <div className="App">
      <header className="App-header">
       
        <p>
          Fun With Physics
        </p>
     
    <div classNameName = "wrapper">
      <h3 styles={{fontStyle: 'Montserrat'}}>Calculating Force using mass and acceleration</h3>
      <br/>
      <p>F = m * a</p><br/>
      <form action="">
      <div className="form-group" id='inputform'>
          <input type="text"  className="form__field" name="a" id="mass" placeholder="Enter mass" />
          <input type="text" name="b" className="form__field" id="acce" placeholder="Enter acceleration " /> <br/> <br/>
          <button className="btn btn-outline-light" type="button" onClick={Force}>Find</button>

      </div>
    </form>
      <p id="result"></p><br/><br/>
    </div>


    </header>
  </div>
    
  );
}

export default App;