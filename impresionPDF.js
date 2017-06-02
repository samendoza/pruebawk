/* 
 * @desc Script que ayuda a segmentar una pagina web a un div en especifico
 */

/* 
 * @desc getPagina regresa recupera el contenido deseado de la pagina web
 * @param idDiv-> Id del div que queremos imprimir en pdf
 * @return pagina-> arreglo que contiene [head, div]
 */

function getPagina(idDiv){
    var head = $("head").html();
    var div  = $("#"+idDiv).html(); 
    
    return {head: head, div: div};
}

/* 
 * @desc generarPDF hace una peticion post para que el servidor genere el pdf de un div especifico
 * @param idDiv-> Id del div que queremos imprimir en pdf, url-> direccion del servidor
 * @return ---
 */

function generarPDF(idDiv, url){

    var pagina = getPagina(idDiv);
    
    //Agregamos el contenido a dos input hidden que estan en el formulario para crear la peticion
    $("#head").val(pagina.head);
    $("#div").val(pagina.div);
    
    var posting = $.post( url, pagina);
    posting.done(function( data ) {
        //Hacer algo para descargar el archivo
        alert(data);
        $("#link").show();
    });
    
}

$(document).ready(function(){
    $("#generarPDF").submit(function(event){
        event.preventDefault();
        
        var url = $(this).attr('action');
        var idDiv = "GoogleCharts";
        
        generarPDF(idDiv, url); 
    });
});