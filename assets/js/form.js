
    // var form = document.getElementById("my-form");
    // const textparagraph = document.getElementsByClassName("yespositiveparagraph");
     
    const thetextarea = document.getElementById("textP")
   

    function enableBtn(thetextarea) {
        
        document.getElementById("textP").readOnly = false
        
    }

    function disableBtn () {
        document.getElementById("textP").readOnly = true
        
    }
// Terms and condtions Check Required Function
    function isChecked(checkbox, sub1) {
        document.getElementById(sub1).disabled = !checkbox.checked;
    }
    // $('input[type=radio]').change(function(){
    //     var $p = $(this).closest('.controls');
    //     var $checked = $p.find(':checked');
    //     $('#responder_' + this.id.slice(-1)).prop('disabled',$checked.val() == 'No');   
    // }).change();
    

    

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

// Consulation Hide/Show Function's
function showTraining()  {
    var hiddensection = document.getElementsByClassName("hidden");
    let enabletraining = document.getElementById("training")
    let enablenutrition = document.getElementById("nutrition")
    let enableboth = document.getElementById("both");
    // if (enabletraining.checked == true ){
    //     hiddensection.style.display = "block";
    // }
    for(var i=0; i<hiddensection.length; i+=1)
    $('.hidden').css('display', 'block');
    $('.secondanswer').css('display', 'none');
    return;
}

function showNutrition() {
    var hiddensectiontwo = document.getElementsByClassName("secondanswer")
    var hidefirstsection = document.getElementsByClassName("firstanswer")
    for(var i=0; i<hiddensectiontwo.length; i+=1)
    $('.secondanswer').css('display', 'block')
    $('.firstanswer').css('display', 'none');
    
    return;
}

function showBoth() {
    var thirdsection = document.getElementsByClassName("thirdsection")
    for(var i=0; thirdsection.length; i+=1)
    $('.thirdsection').css('display', 'block')
    $('.firstanswer').css('display', 'none')
    $('.secondanswer').css('display', 'none')
    return;
}