Meteor.methods({
	addSchedule:function(uid,sched){
		var docID = Schedules.insert(
			sched
		);
		Meteor.users.update({
			_id:uid
		},{
			$addToSet:{
				Schedules:docID
			}
		});
	},
	changeEvent: function(sid,time,day,tex){
		var obj = {};
		//allow deletion of activity
		obj["Times.$."+day]=tex;
		Schedules.update({_id:sid,"Times.Time":time},{$set:obj});
	}
})

