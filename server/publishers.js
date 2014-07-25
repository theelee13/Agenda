Meteor.publish('getSchedules',function(){
	if(this.userId){
		return Schedules.find({User:this.userId});
	}
	this.ready();
});

Meteor.publish("userData", function () {
	if (this.userId) {
		return Meteor.users.find({_id: this.userId},{fields: {'activities': 1}});
	}
	else {
		this.ready();
	}
});
