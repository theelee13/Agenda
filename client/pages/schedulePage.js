Meteor.startup(function(){
	Session.set('wantsToAdd',false);
	Session.set('selectedActivity',null);
});

Template.schedulePage.hasPage = function(){
	return Schedules.findOne({_id:Session.get('thisWeek')});
}

Template.schedulePage.wantsToAdd = function(){
	return Session.equals('wantsToAdd',true);
}

Template.schedulePage.activity = function(){
	return Meteor.user().activities;
}

Template.schedulePage.events = {
	'click button[name=addActivity]':function(event,template){
		event.preventDefault();
		if(Session.equals('wantsToAdd',true)){
			Session.set('wantsToAdd',false);
		}
		else{
			Session.set('wantsToAdd',true);
		}
	},
	'click button[name=finalAdd]':function(event,template){
		event.preventDefault();
		var act = template.find('input[name=inputter]').value;
		Meteor.call('addActivity',Meteor.user()._id,act);
		Session.set('wantsToAdd',false);
	}
}

Template.schedulePage.isActive = function(obj){
	if(Session.equals('selectedActivity',obj)){
		return "active";
	}
	return "";
}
