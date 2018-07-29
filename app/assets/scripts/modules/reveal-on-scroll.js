import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(){
		this.itemsToReveal = $(".feature-item");
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints(){
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem, //dom element
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				}, //what to happen when element is scrolled to.
				offset: "80%"
			});
		});
		//By default waypoint doesn't react until the top of the element is at the top of the page in browser / viewport.
	}
}

export default RevealOnScroll;