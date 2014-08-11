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
	}
}
