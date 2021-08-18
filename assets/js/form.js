
    // var form = document.getElementById("my-form");
    const textparagraph = document.getElementsByClassName("yesPositiveParagraph");
    const optionyes = document.getElementsByClassName("enableYes")
   

    function enableBtn() {
        textparagraph.disabled = false;
        return false;
    }

    function disableBtn () {
        textparagraph.disabled = true;
        return true;
    }

 
    

    

    // async function handleSubmit(event) {
    //   event.preventDefault();
    //   var status = document.getElementById("my-form-status");
    //   var data = new FormData(event.target);
    //   fetch(event.target.action, {
    //     method: form.method,
    //     body: data,
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    //   }).then(response => {
    //     status.innerHTML = "Thanks for your submission!";
    //     form.reset()
    //   }).catch(error => {
    //     status.innerHTML = "Oops! There was a problem submitting your form"
    //   });
    // }
    // form.addEventListener("submit", handleSubmit)

    
    