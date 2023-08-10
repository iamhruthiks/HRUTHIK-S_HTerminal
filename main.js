function myfunction1(){
    alert("Please connect us through your social media account to contact us");
}

function myfunction2(){
    alert("Please Sign up to Get Access");
}


const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

