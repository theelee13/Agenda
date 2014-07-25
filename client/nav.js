Template.nav.schedules = function(){
	return Schedules.find({User:Meteor.user()._id});
}
