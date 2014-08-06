Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		var act = Session.get('selectedActivity');
		var sched = Session.get('thisWeek');
		console.log(day, act,sched, this.Time)
		Meteor.call('changeEvent',sched,this.Time,day,act);
	}
}
