<?php
/**
 * Description of CreadorPDF
 *
 * @author Saul-WM
 */
class CreadorPDF {
    
    private $pathWK;
    private $nomPag="impresionPDF.html"; 
    private $tamPagina;
    private $delay="";
    private $urlOrigen;
    private $urlDestino;
    private $nombrePDF;
    
    private $head;
    private $div;
    
    public function __construct($head, $div) {
       $this->head = $head;
       $this->div = $div;
    }
    
    private function crearPaginaTmp($nomPag, $head, $div){
        $myfile = fopen($nomPag, "w") or die("Unable to open file!");
        $txt = "<html><head>";
        $txt .= $head."</head>";
        fwrite($myfile, $txt);
    
        $txt = "<body>";
        $txt .= $div;
        $txt .= "</body></html>";
        fwrite($myfile, $txt);
        fclose($myfile);
    }
    
    public function crearPDF(){//$pathWK, $tamPagina, $urlOrigen, $urlDestino, $nombrePDF, $delay){
        $this->crearPaginaTmp($this->nomPag, $this->head, $this->div);
        chdir($this->pathWK); 
        $this->tamPagina = '--page-size '.$this->tamPagina;
        $cmd_delay = '--no-stop-slow-scripts --javascript-delay ';
        
        $comando = 'wkhtmltopdf '.$this->tamPagina.' ';
        if( $this->delay !='' ){
            $comando .= $cmd_delay .' '.$this->delay;
        }
        
        $comando .= ' '.$this->urlOrigen.' '.$this->urlDestino.$this->nombrePDF;
        echo $comando;
        shell_exec($comando);
    }
    
    public function setPathWK($path){
        $this->pathWK = $path;
    }
    
    public function setNomPag($nombrePag){
        $this->nomPag = $nombrePag;
    }
    
    public function setTamPag($tamPag){
        $this->tamPagina = $tamPag;
    }
    
     public function setDelay($delay){
        $this->delay = $delay;
    }
    
    public function setUrlOrigen($urlOrigen){
        $this->urlOrigen = $urlOrigen;
    }
    
    public function setUrlDestino($urlDestino){
        $this->urlDestino = $urlDestino;
    }

    public function setNomPDF($nomPDF){
        $this->nombrePDF = $nomPDF;
    }
}
