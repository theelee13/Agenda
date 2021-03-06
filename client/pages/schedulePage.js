Meteor.startup(function(){
	Session.set('wantsToAdd',false);
	Session.set('selectedActivity',null);
	Session.set('chosenColor',"white");
	Session.set('lastDay',null);
	Session.set('lastTime',null);
});

Template.schedulePage.hasPage = function(){
	return Schedules.findOne({_id:Session.get('thisWeek')});
}

Template.schedulePage.wantsToAdd = function(){
	return Session.equals('wantsToAdd',true);
}

Template.schedulePage.activities = function(){
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
		var color = Session.get('chosenColor');
		var act = template.find('input[name=inputter]').value;
		if(checkDup(act)){
			return;
		}
		if(_.isBlank(act)){
			return;
		}
		Meteor.call('addActivity',Meteor.user()._id,act,color);
		Session.set('wantsToAdd',false);
	},
	'change select[name=color]': function(event,template){
		Session.set('chosenColor',event.currentTarget.value);
	}
}

Template.schedulePage.isActive = function(obj){
	if(Session.equals('selectedActivity',null)){
		return "";
	}
	if(Session.get('selectedActivity').activity===obj){
		return "active";
	}
	return "";
}

Template.schedulePage.selectedColor = function(name){
	if(Session.equals('chosenColor',name)){
		return "selected";
	}
	return "";
}

var checkDup = function(activity){
	var user = Meteor.user();
	var activities = _.pluck(user.activities,'activity');
	if(_.contains(activities,activity)){
		return true;
	}
	return false;
}
