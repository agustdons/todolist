function addTodoItem() {
    let nuevaTarea = $("#texto-tarea").val();
    $("#todo-list").append("<li><input" + 
                           "name='todo-item-ckeck'" + 
                           "class='tareas'"+ 
                           "value='" + nuevaTarea + "' /> " + 
                           nuevaTarea + "<select class='optionBtn'><option disabled selected value>Estado</option><option value='1'>Hecho</option><option value='2'>Pendiente</option></select>" +
                           "<button class='btnborrar'>"+
                           "<i class='fas fa-trash-alt fa-lg'></i></button></li>");
    
                           
   $("#texto-tarea").val("");
   
     //LOCAL STORAGE

   db.push(nuevaTarea);
   localStorage.setItem("db", JSON.stringify(db))
  }
  
  function deleteTodoItem(e, item) {
    e.preventDefault();
    $(item).parent().fadeOut('slow', function() { 
      $(item).parent().remove();
    });
  }
  
  $(function() {
   
     $("#agregarTarea").on('click', function(e){
       e.preventDefault();
       addTodoItem()
     });
    


    $("#todo-list").on('click', '.btnborrar', function(e){
      let item = this; 
      deleteTodoItem(e, item)
    })
    
    $(document).on('click', ".todo-item-ckeck")
  
  });

  //LOCAL STORAGE
  let db = []

  // UTILIZANDO AJAX

  $( document ).ready(function() {
    //Declaro la url del API
    const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 

    //Declaro la información a enviar
    const infoPost =  { nombre: "Agustin", profesion: "Front End Developer" }
   
    //Escuchamos el evento click del botón agregado
    $("#agregarTarea").click(() => {
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: db[db.length-1],
            success: function(response){
                console.log(response)
                console.log('Los datos se han registrado')
            }
        });
    });
});


