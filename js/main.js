$(document).ready(function(){

  let tamanhoTelaVerticalNoMomento = window.screen.height;
  let tamanhoTelaHorizontalNoMomento = window.screen.width;
  slideResponsivo();

    $('#cadastro').click(function(){
        $('.tela-cadastro').toggle(400);
    })
    $(".capa-relogios").slick({
      autoplay:true,
      arrows:false
    });

    function slideResponsivo(){
      if(tamanhoTelaVerticalNoMomento <= 932 && tamanhoTelaHorizontalNoMomento <= 430){
        $(".relogios-slide").slick({
          autoplay:true,
          arrows:true,
          slidesToShow:1,
          slidesToScroll:4,
          infinite:true
        })
      }
      else{
        $(".relogios-slide").slick({
          autoplay:true,
          arrows:true,
          slidesToShow:4,
          slidesToScroll:4,
          infinite:true
        })
      }
    }
})