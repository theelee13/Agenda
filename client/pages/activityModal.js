Template.activityModal.chosen = function(){
	return Session.get('chooseAct');
}

Template.activityModal.activities = function(){
	return Meteor.user().activities;
}

Template.activityModal.isActive = function(obj){
	if(Session.get('chooseAct').activity===obj){
		return "active";
	}
	return "";
}

Template.activityModal.events = {
	'click a':function(event){
		Session.set('chooseAct',{activity:event.target.text,color:event.target.id});
	},
	'click button[name=changeActivity]':function(){
		var day = Session.get('lastDay');
		var act = Session.get('chooseAct');
		var sched = Session.get('thisWeek');
		var time = Session.get('lastTime');
		Meteor.call('changeEvent',sched,time,day,{activity:act.activity,color:act.color});
		$('#actModal').modal('hide');
	}
}
