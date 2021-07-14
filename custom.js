$(document).ready(function(){
   $('.chat_icon').click(function(event){
     $('.chat_box').toggleClass('active');
   });
    $('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});





<script>
function myFunction() {
  let x = document.getElementById("char").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "You are success fully Join us";
  } else {
    text = "Please try again";
  }
  document.getElementById("demo").innerHTML = text;
}

</script>