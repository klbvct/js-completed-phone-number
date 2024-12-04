function (){
    var element = document.querySelector('input[name="phone"]');
  
    if(element) {
      var phone = element.value.replace(/[^0-9]/g, '');
      return phone;
    }
}