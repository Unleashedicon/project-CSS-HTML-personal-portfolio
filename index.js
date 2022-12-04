
function add(x){
    setTimeout(() => {
        x.getElementsByTagName("span")[0].style.visibility = "visible";
        x.getElementsByTagName("span")[1].style.visibility = "visible";
      }, "300")

}

function remove(x){

    setTimeout(() => {
        x.getElementsByTagName("span")[0].style.visibility= "hidden";
        x.getElementsByTagName("span")[1].style.visibility= "hidden";
      }, "300")
 
    }


    function addbutton(x){
        setTimeout(() => {
            x.style.backgroundColor = "#ec3e56";
            x.getElementsByTagName("i")[0].style.paddingLeft = "15px";
          }, "350")
    
    }


    function removebutton(x){
        setTimeout(() => {
            x.style.backgroundColor = "#303942";
            x.getElementsByTagName("i")[0].style.paddingLeft = "10px";
          }, "350")
    
    }


    // setTimeout(() => {
    //     document.querySelector("."+ target).classList.remove("pressed")
    //   }, "100")

   