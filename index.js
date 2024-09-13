const deets = {
    0 : ['Max',"description for Max."],
    1 : ['Marlon',"description for Marlon."],
    2 : ['Alex',"description for Alex."],
    3 : ['Perg',"description for Perg."],
};

window.onload = () => {
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', e => {
            let targetText = e.target.outerHTML;
            let idx = 0;

            if (targetText.startsWith('<img') || targetText.startsWith('<h2')) {
                idx = e.target.parentNode.getAttribute('data-id')
            } else {
                idx = e.target.getAttribute('data-id');
            }

            let descriptionTitle = document.querySelector('#desc h2');
            let description = document.querySelector('#desc p');
    
            descriptionTitle.innerText = `About ${deets[idx][0]}`;
            description.innerText = `${deets[idx][1]}`;
        })

    })
}