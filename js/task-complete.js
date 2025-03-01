
let allBtn = document.getElementsByClassName('task-btn');
for (let btn of allBtn) {
    btn.addEventListener('click', function () {
        alert('Board Updated Successfully')
        let incrementElement = document.getElementById("increment-number");
        let decrementElement = document.getElementById("decrement-number");
        let add = parseInt(incrementElement.innerText);
        let sub = parseInt(decrementElement.innerText);
        incrementElement.innerText = add + 1;
        decrementElement.innerText = sub - 1;
        this.disabled = true ;
        // card title

        // live time
        let currentTime = new Date().toLocaleTimeString();
        
        // comment box
        const messageContainer = document.getElementById('message-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]','mb-4','rounded-lg','p-2');
        
        div.innerHTML = `
        <h3>You have completed the task  </h3>
        <p>at ${currentTime} </P>
        `
        messageContainer.appendChild(div);

        // remove child
        const removeChild = document.getElementById('remove-btn');
        removeChild.addEventListener('click', function(){
            messageContainer.removeChild(div)
        })
        

    })
}
