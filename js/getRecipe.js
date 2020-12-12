$(window).on('load', function(){ 
    $.ajax({
        method: 'GET',
        url: "../php/getRecipe.php",
        data: {'course':'starter'},
    
        success: function(data){
            console.log(data);
            document.getElementById('recipe').innerText = data;
        },
        error: function(){
            alert('Rezept hinzufügen fehlgeschlagen!');
        }
    })
});

