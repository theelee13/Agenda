Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		if(day==="Time"){
			return;
		}
		var act = Session.get('selectedActivity').activity;
		var sched = Session.get('thisWeek');
		Meteor.call('changeEvent',sched,this.Time,day,act);
	}
}
