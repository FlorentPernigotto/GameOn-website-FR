
/** Toggle the notification toast */
function showNotificationToast() {
    // Get the notification area
    const child = document.getElementById('#thank');
    // Clone the child node
    const clone = child.cloneNode(true);
    // Push the node 
    const node = document.querySelector("#closethanks").appendChild(clone);
    // Define the timer for displaying the notification toast
    setTimeout(() => {
            if (node) {
                node.style.animation = "toast 2s ease-out forwards";
                setTimeout(() => { node.remove(); }, 5000);
            }
        },2000);
  }
 