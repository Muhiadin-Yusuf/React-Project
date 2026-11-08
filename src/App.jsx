import External from "./External";
import Navbar from "./Navbar";
import Style from "./Style";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Child from "./Child";

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }
//   return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
// }

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }
function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }
  return (
    <>
      <button onClick={handleClick}>Toggle the lights</button>
    </>
  );
}

function App() {
  return (
    <>
      {/* <LightSwitch /> */}
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
