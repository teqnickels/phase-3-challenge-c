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
    let room2b = document.getElementById("room2B").childNodes;
    console.log(room2b[1].innerText, room2b[2].innerText, room2b[5].innerText)

      switch (button) {
        case button1:
          let modalTable = document.getElementsByClassName("modal-table-body")[0];
          let row1 = modalTable.insertRow(0);
          let cell1 = row1.insertCell(0);
          let cell2 = row1.insertCell(1)
          cell1.innerHTML = "Room " + `${room2b[1].innerText}`
          cell2.innerHTML = `${room2b[5].innerText}` + "/night";

          let row2 = modalTable.insertRow(1);
          let cell3 = row2.insertCell(0);
          let cell4 = row2.insertCell(1)
          cell3.innerHTML = "check-in"
          cell4.innerHTML = '<input id="date" type="date">'

          let row3 = modalTable.insertRow(2);
          let cell5 = row3.insertCell(0);
          let cell6 = row2.insertCell(1)
          cell5.innerHTML = "nights"
          cell6.innerHTML = '<input id="date" type="date">'< select > < option value = "1" > 1 </option> <option value = "2" > 2 </option > < option value = "3" > 3 </option> <option value = "4" > 4 </option > </select><option value = "5" > 5 </option > </select>
          


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