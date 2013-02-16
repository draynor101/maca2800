
Modernizr.load([
	{
		test : Modernizr.history,
		nope : 'js/histroy.js', 
		complete : function() {
			init();
		}
	}
]);

function init() {
	$( '#page2' ).click( getPage2 );
}

function getPage2( event ) {
	event.preventDefault();
	//console.log( "you're not going anywhere" );

	$.get( 'page2.html', updateContent );	
}

function updateContent( response ) {
	var $html = $( '<html>' );
	$html.append(response);

	var $content = $html.find( '#container' );
	$( '#container' ).html( $content );

}