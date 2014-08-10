Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		if(day==="Time"){
			return;
		}
		var act = Session.get('selectedActivity');
		var sched = Session.get('thisWeek');
		Meteor.call('changeEvent',sched,this.Time,day,{activity:act.activity,color:act.color});
	}
}

Template.showLarge.getColor = function(day){
	switch(day.color){
		case "blue":return "info";
		default:return "";
	}
}
