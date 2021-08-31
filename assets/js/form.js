
    // var form = document.getElementById("my-form");
    // const textparagraph = document.getElementsByClassName("yespositiveparagraph");
    const 
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
// Test funtion #1
// function showSection() {
//     [].forEach.call(document.querySelectorAll('name=optionone'), function(button){
//         document.getElementById(button.dataset.divid).className = button.checked? '' : 'hidden';
//     })
// }

// window.onload = function () {
//     [].forEach.call(document.querySelectorAll(['name=optionone']), function (button){
//         button.onclick = showSection;
//     })
// }
// End
// Test Function #2
// function handleOne() {
//     const divOne = document.getElementById("firstanswer");
//     if (divOne.hasAttribute('hidden')) {
//       divOne.removeAttribute('hidden');
//     } else {
//       divOne.setAttribute('hidden');
//     }
//   }
//   End
// Test Function #3
// $(document).ready(function() {
//     $("input[name$='optionone']").click(function() {
//         var test = $(this).val();

//         $("div.desc").hide();
//         $("#thefirstanswer" + test).show();
//     });
// });
// 