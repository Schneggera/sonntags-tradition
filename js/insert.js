$('#insertRecipe').on("submit", function (event) {
    event.preventDefault();
    let formData = $('#insertRecipe').serialize();
    console.log(formData);
    $.ajax({
        method: 'POST',
        url: "/php/insert.php",
        data: formData,
    
        success: function(){
            window.location.href = '../html/insert.html';
        },
        error: function(){
            alert('Rezept hinzufügen fehlgeschlagen!');
        }
    })
});

