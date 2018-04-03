jQuery(document).ready(function(){

	/* 테이블 슬라이드 */

	var slideI=0;
	$('.arrow_R > a').click(function(){
		slideI++;
		if(slideI>2){
			slideI=2;

			console.log('slideI='+slideI+' 이므로 더 이상 오른쪽으로 못움직입니다.'); // 나중에 코드 완성시킬 때 삭제 시켜도 됨
			return false;
		}else{
			$('.hdslide').animate({left:'-=100%'});
			$('.bdslide').animate({left:'-=100%'});
			console.log(slideI);
		}
	});


	$('.arrow_l > a').click(function(){
		slideI--;
		if(slideI<0){
			slideI=0;

			console.log('slideI='+slideI+' 이므로 더 이상 왼쪽으로 못움직입니다.'); // 나중에 코드 완성시킬 때 삭제 시켜도 됨
			return false;
		}else{
			$('.hdslide').animate({left:'+=100%'});
			$('.bdslide').animate({left:'+=100%'});
			console.log(slideI);
		}
	});


/*
	// 너네가 짜놓은 원본

	// 테이블 슬라이드
  $('article.detail .headerWrap .arrow_R a').click(function(){
		$('article.detail .slideheaderWrap .hdslide').animate({left: '-=100%'});
		$('.tablelineWrap .slidebodyWrap .bdslide').animate({left: '-=100%'});
	});

	$('article.detail .headerWrap .arrow_l a').click(function(){
		$('article.detail .slideheaderWrap .hdslide').animate({left: '+=100%'});
		$('.tablelineWrap .slidebodyWrap .bdslide').animate({left: '+=100%'});
	});
*/

	// ★ 애두라 코생이 만톼. 내카 마라탕머코 너무 매워서 숨질거가타서 20000 주린다
	// ★ 피료하면 코급지게 짜주코시픈데 시칸나면 하라케케
});
