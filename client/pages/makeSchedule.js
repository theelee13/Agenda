Meteor.startup(function(){
	Session.set("chosenStart",8);
	Session.set("chosenEnd",20);
	Session.set("chosenInc",60);
	Session.set("unfinished",null);
});

Template.makeSchedule.events = {
	'change select[name=interval]':function(event,template){
		Session.set('chosenInc',event.currentTarget.value);
	},
	'change select[name=start]':function(event,template){
		Session.set('chosenStart',event.currentTarget.value);
	},
	'change select[name=end]':function(event,template){
		var end=0;
		switch(parseInt(event.currentTarget.value)){
			case 8:
				end=20;
				break;
			case 9:
				end=21;
				break;
			case 10:
				end=22;
				break;
			case 11:
				end=23;
				break;
			case 12:
				end=24;
				break;
			default:
				end=20;
				break;
		}
		Session.set('chosenEnd',end);
	},
	'click button[name=add]':function(event,template){
		event.preventDefault();
		var name = template.find("input[name=name]").value;
		var sched = Session.get('unfinished');
		sched.Name=name;
		if(_.isBlank(name)){
			return;
		}
		Meteor.call('addSchedule',Meteor.user()._id,sched);
		template.find("input[name=name]").value="";
		$('#schedModal').modal('hide');
	}
}

Template.makeSchedule.unfinishedSchedule = function(){
	Session.set('unfinished',null);
	var sched = {};
	sched.User=Meteor.user()._id;
	sched.Times=[];
	var startTime = parseInt(Session.get("chosenStart"));
	var endTime = parseInt(Session.get("chosenEnd"));
	var increment = parseInt(Session.get("chosenInc"));
	for(var i = startTime;i<endTime+1;i++){
		for(var j = 0;j<60;j+=increment){
			var hr=i;
			var min=j;
			var suf;
			if(i>12){
				hr=i-12;
			}
			if(i>11){
				suf="pm";
				if(i===24){
					suf="am";
				}
			}
			else{
				suf="am";
			}
			if(j===0){
				min="00";
			}
			timeObject = {
				Time: hr+':'+min+suf,
				Sunday: "",
				Monday: "",
				Tuesday: "",
				Wednesday: "",
				Thursday: "",
				Friday: "",
				Saturday: ""
			}
			sched.Times.push(timeObject);
		}
	}
	Session.set('unfinished',sched);
	return sched;
}

Template.makeSchedule.starts = function(){
	return [4,5,6,7,8,9,10,11];
}

Template.makeSchedule.ends = function(){
	return [8,9,10,11,12];
}

Template.makeSchedule.incs = function(){
	return [60,30,15];
}

Template.makeSchedule.selectedInterval = function(num){
	if(Session.equals('chosenInc',num)){
		return "selected";
	}
	return "";
}

Template.makeSchedule.selectedStart = function(num){
	if(Session.equals('chosenStart',num)){
		return "selected";
	}
	return "";
}

Template.makeSchedule.selectedEnd = function(num){
	if(Session.equals('chosenEnd',num)){
		return "selected";
	}
	return "";
}
