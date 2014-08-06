Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		var act = Session.get('selectedActivity');
		var sched = Session.get('thisWeek');
		Meteor.call('changeEvent',sched,this.Time,day,act);
	}
}
