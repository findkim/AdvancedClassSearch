$(document).ready(function() {
	var $calendar = $('#calendar');
	var id = 10;
	$calendar.weekCalendar({
		timeslotsPerHour : 4,
		allowCalEventOverlap : true,
		firstDayOfWeek : 0,
		businessHours :{start: 7, end: 21, limitDisplay: true },
		daysToShow : 7,
		height : function($calendar) {
			return $(window).height() - $("h1").outerHeight() - 1;
		},
		eventRender : function(calEvent, $event) {
			if (calEvent.end.getTime() < new Date().getTime()) {
				$event.css("backgroundColor", "#aaa");
				$event.find(".wc-time").css({
					"backgroundColor" : "#999",
					"border" : "1px solid #888"
				});
			}
		},
		data : function(start, end, callback) {
			callback(getEventData());
		}
	});
	function resetForm($dialogContent) {
		$dialogContent.find("input").val("");
              $dialogContent.find("textarea").val("");
	}
	function getEventData() {
		var year = new Date().getFullYear();
		var month = new Date().getMonth();
		var day = new Date().getDate();
		return {
			events : [
				{
					"id":1,
						"start": new Date(year, month, day, 3, 30),
						"end": new Date(year, month, day, 4, 20),
					"title":"Intermediate Spanish I, 20215, 03"
				},
				{
					"id":2,
         		                "start": new Date(year, month, day, 3, 30),
                   		        "end": new Date(year, month, day, 4, 20),
					"title":"Intermediate Spanish I, 20215, 03"
				},
				{
					"id":3,
                         		"start": new Date(year, month, day, 3, 30),
                         	 	 "end": new Date(year, month, day, 4, 20),
					"title":"Intermediate Spanish I, 20215, 03"
				},
				{
					"id":4,
						"start": new Date(year, month, day, 12, 30),
						"end": new Date(year, month, day, 1, 45),
					"title":"Networking and Security, 20089, 01"
				},
				{
					"id":5,
         		                "start": new Date(year, month, day, 12, 30),
                   		        "end": new Date(year, month, day, 1, 45),
					"title":"Networking and Security, 20089, 01"
				}
			]
		};
	}
});
