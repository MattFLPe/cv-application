import './App.css';

function firstSection() {
  return (
    <div className="firstSection">
      <form>
    <label for="fname">Name:</label><br />
    <input type="text" id="fname" name="fname" />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
    </form>
    </div>
  );
}


export default App;
