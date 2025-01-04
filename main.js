const input = document.getElementById('myInput');
const btn = document.getElementById('btn-generate');
const copybtn = document.getElementById('copy-btn');
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+<=>?@[]^_{|}";

btn.addEventListener('click', function(){
    
    var Password = "";

    //get randome numbers
    //Math.random() * (max - min) + min
    
    if(input.value != null)
    {
        input.value = "";
    }
    
    for (let i = 0; i < 13; i++) {
        
        var index = Math.floor(Math.random()*(chars.length - 1) + 1 );
        Password += chars[index];
    }
    
    input.value = Password;
    
});

copybtn.addEventListener('click', function(){
    const input = document.getElementById('myInput');
    input.select();
    document.execCommand('copy');
})

const alertBox = document.getElementsByClassName('alert');
document.getElementById('copy-btn').addEventListener('click',function(){
    if(input.value == "")
    {
        return;
    }

    document.querySelector('.alert').classList.add('fadeout')
    setTimeout(() => {
        document.querySelector('.alert').classList.remove('fadeout')
    }, 3000);
    
})