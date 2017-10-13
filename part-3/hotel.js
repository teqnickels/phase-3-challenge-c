window.addEventListener('load', () => {

  const closeModalButton = document.getElementsByClassName("modal-content-close-button")[0]
  const button1 = document.getElementsByTagName("button")[1]
  const button2 = document.getElementsByTagName("button")[2]
  const button3 = document.getElementsByTagName("button")[3]
  const button4 = document.getElementsByTagName("button")[4]
  const button5 = document.getElementsByTagName("button")[5]
  const button6 = document.getElementsByTagName("button")[6]
  const button7 = document.getElementsByTagName("button")[7]
  let modal = document.getElementsByClassName("modal-hidden")[0]

  const openModal = (button) => {
    modal.className = "modal-display";

      switch (button) {
        case button1:
          console.log("BUTTON 1 CLICKED!")
          break;

        case button2:
          console.log("BUTTON 2 CLICKED!")
          break;

        case button3:
          console.log("BUTTON 3 CLICKED!")
          break;

        case button4:
          console.log("BUTTON 4 CLICKED!")
          break;

        case button5:
          console.log("BUTTON 5 CLICKED!")
          break;

        case button6:
          console.log("BUTTON 6 CLICKED!")
          break;

        case button7:
          console.log("BUTTON 7 CLICKED!")
          break;
        
          case closeModalButton:
          closeModal()
          break;
      }
    }

    const closeModal = () => {
      modal.className = "modal-hidden"
    }


  var buttons = document.querySelectorAll("button")
    console.log(buttons)
  for (let button of buttons) {
    button.addEventListener('click', openModal.bind(this, button))
  }
})