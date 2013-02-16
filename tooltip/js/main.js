
//make a tooltip
var $tooltip = $( '<div class="tooltip" />' );

//make it appear on mouseover 

$( 'a' ).mouseenter( showToolTip )
		.mouseleave( hideToolTip );




function showToolTip() {
	//console.log( 'hello' );

	var $this 	= $( this ); 
	var title 	= $this.attr( 'title' );
	var offset 	= $this.offset(); 

	//display text and title attribute
	$tooltip.text( title ).hide();

	//pop up near hover spot
	$tooltip.css({
		top : offset.top - 70,
		left : offset.left
	});

	//fade in tooltip
	$( 'body' ).append( $tooltip );
	$tooltip.fadeIn();

}

function hideToolTip() {
	$tooltip.detach();
}