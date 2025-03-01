const allBtn = document.querySelectorAll('.task-btn');
const comments = document.querySelectorAll('.card-title');
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function () {
        alert('Board Updated Successfully');
        const incrementElement = document.getElementById("increment-number");
        const decrementElement = document.getElementById("decrement-number");
        const add = parseInt(incrementElement.innerText);
        const sub = parseInt(decrementElement.innerText);
        incrementElement.innerText = add + 1;
        decrementElement.innerText = sub - 1;
        this.disabled = true;
        // sob kaj sese arekta alert koralam
        if (decrementElement.innerText == 0) {
            alert('Congratulations!!! You have completed all the task. ')
        }

        // card title
        const cardTitle = comments[i].innerText;
        console.log(cardTitle)

        // live time
        let currentTime = new Date().toLocaleTimeString();

        // comment box er container by html
        const messageContainer = document.getElementById('message-container');
        // ekta element create korlam comment er jonno
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'mb-4', 'rounded-lg', 'p-2');
        div.innerHTML = `
        <p>You have completed the task ${cardTitle} at ${currentTime} </p>
        `
        messageContainer.appendChild(div);

        // remove child
        const removeChild = document.getElementById('remove-btn');
        removeChild.addEventListener('click', function () {
            messageContainer.removeChild(div)
        })

    })
}
