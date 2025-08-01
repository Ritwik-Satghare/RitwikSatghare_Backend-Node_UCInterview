let myName;
document.getElementById("myButton").onclick = function () {
  myName = document.getElementById("userInput").value;
  myName=myName.trim();
  const isValid=/^[a-zA-Z]+$/.test(myName);
  if(!isValid){
    document.getElementById("errorMsg").textContent="Please Enter a Valid Name";
    return;
  }
  document.getElementById("errorMsg").textContent="";
  const slicedName = myName.slice(0, 4);
  const surname = [
    "Geller",
    "Tribbiani",
    "Buffay",
    "Green",
    "Bing",
    "Wheeler",
    "Hannigan",
  ];
  const index = Math.floor(Math.random() * surname.length);
  const nickName = `${slicedName} ${surname[index]}`;
  document.getElementById(
    "output"
  ).innerHTML = `<span>Your Username:</span>
<br>
<span>${nickName}</span>`;
};
