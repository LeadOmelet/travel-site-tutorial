import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(items, offset){
		this.itemsToReveal = items;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem, //dom element
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				}, //what to happen when element is scrolled to.
				offset: that.offsetPercentage
			});
		});
		//By default waypoint doesn't react until the top of the element is at the top of the page in browser / viewport.
	}
}

export default RevealOnScroll;