window.addEventListener('load', () => {

  const button1 = document.getElementsByClassName("button1")[0]
  // const button2 = document.getElementsByClassName("button2")[1]
  // const button3 = document.getElementsByClassName("button3")[2]
  // const button4 = document.getElementsByClassName("button4")[3]
  // const button5 = document.getElementsByClassName("button5")[4]
  // const button6 = document.getElementsByClassName("button6")[5]
  // const button7 = document.getElementsByClassName("button7")[6]

    button1.addEventListener('click', () => {
     buildModal('room2B')
    });

    // button2.addEventListener('click', () => {
    //   const room2A = document.getElementById(room2A)
    //   buildModal(room2A)
    // });

    // button3.addEventListener('click', () => {
    //   const room2B = document.getElementById(room2B)
    //   buildModal(room2B)
    // });

    // button4.addEventListener('click', () => {
    //   const room3A = document.getElementById(room3A)
    //   buildModal(room3A)
    // });

    // button5.addEventListener('click', () => {
    //   const room3B = document.getElementById(room3B)
    //   buildModal(room3B)
    // });

    // button6.addEventListener('click', () => {
    //   const room3C = document.getElementById(room3C)
    //   buildModal(room3C)
    // });

    // button7.addEventListener('click', () => {
    //   const room4A = document.getElementById(room4A)
    //   buildModal(room4A)
    // });

    const buildModal = (room) => {
      let modal = document.getElementsByClassName("modal-hidden")[0]
      modal.className = "modal-display";

    }

})



