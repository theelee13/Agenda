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
	addEvent: function(sid,time,day,tex){
		var obj = {};
		obj["Times.$."+day]=tex;
			Schedules.update({_id:sid,"Times.Time":time},{$set:obj});
		/*
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Monday":tex}});
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Tuesday":tex}});
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Wednesday":tex}});
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Thursday":tex}});
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Friday":tex}});
				Schedules.update({_id:sid,"Times.Time":time},{$set:{"Times.$.Saturday":tex}});
		}
		*/
	}
})

