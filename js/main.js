console.log('Js file connected')
document.addEventListener("DOMContentLoaded", () => {
    const draggableIcon = document.getElementById("draggable-icon");
    const dropBox = document.querySelector(".drop-box");
  
    // Event listener for when the draggable icon is being dragged
    draggableIcon.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  
    // Event listener for when the draggable icon is being dropped
    dropBox.addEventListener("drop", (event) => {
      event.preventDefault();
      const audioFileId = event.dataTransfer.getData("text");
  
      // Check if the dropped item is the draggable icon
      if (audioFileId === "draggable-icon") {
        // Create a clone of the draggable icon and set its attributes
        const clonedIcon = draggableIcon.cloneNode(true);
        clonedIcon.setAttribute("draggable", "false");
  
        // Create an Audio element and set its source to your audio file
        const audio = new Audio("./assets/ooze-92elm-main-version-03-19-3272.mp3");
        audio.controls = true;
  
        // Clear the drop box content (if any) and append the cloned icon and audio element
        dropBox.innerHTML = '';
        dropBox.appendChild(clonedIcon);
        dropBox.appendChild(audio);
  
        // Detach the original icon from its parent (but do not remove the entire parent)
        draggableIcon.parentNode.removeChild(draggableIcon);
  
        // Play the audio file
        audio.play();
      }
    });
  
    // Prevent default behavior to allow dropping
    dropBox.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  });
  