Template.showLarge.isActive = function(str){
	if(Session.equals('selectedDay',str)){
		return "active";
	}
	return "";
}

Template.showLarge.events = {
	'click td':function(){
		var day = Session.get('selectedDay');
		var act = Session.get('selectedActivity');
		var sched = Session.get('thisWeek');
		Meteor.call('addEvent',sched,this.Time,day,act);
	}
}
