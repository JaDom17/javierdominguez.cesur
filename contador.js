if (localStorage.visitas === undefined) {
    localStorage.setItem('visitas', 1);
  }else{
    localStorage.setItem('visitas', parseInt(localStorage.visitas)+1);
  }
  $("#visitas").val(localStorage.visitas);