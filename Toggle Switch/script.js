const switchContainer = document.querySelector(".switchcontainer");
const toggleSwitch = document.querySelector(".toggleswitch");
const container = document.querySelector(".container");
const body = document.querySelector("body");

toggleSwitch.addEventListener("click", turnOn);
/*

or
function turnOn(){
    toggleSwitch.classList.toggle("left")
}
 */


    

function turnOn(){
    if(toggleSwitch.classList.contains("left")){
        toggleSwitch.classList.remove("left")
        switchContainer.style.background ="grey"

    }
    else{
        toggleSwitch.classList.add("left")
        switchContainer.style.backgroundColor = "green"
        const paragraph = document.createElement("p")
        container.append(paragraph)
        paragraph.innerText="Clicked!! refresh to reset";
        paragraph.classList.add("info")
        

}
body.classList.toggle("darkTheme");
}
const icon = document.querySelector(".icon");
const settingsMenu = document.querySelector(".settings-menu")

icon.addEventListener("click", () => {
    if(settingsMenu.classList.contains("hide")){
        settingsMenu.classList.remove("hide")
    }else{
        settingsMenu.classList.add("hide");
    }
});










