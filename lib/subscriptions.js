Meteor.startup(function(){
	if(Meteor.isClient){
		Meteor.subscribe('getSchedules');
		Meteor.subscribe('userData');
	}
});
