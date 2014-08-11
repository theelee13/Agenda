Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		if(day==="Time"){
			return;
		}
		var act = Session.get('selectedActivity');
		var sched = Session.get('thisWeek');
		Session.set('chooseAct',{activity:event.target.innerText,color:event.target.className});
		if(_.isBlank(event.target.innerText)){
			Meteor.call('changeEvent',sched,this.Time,day,{activity:act.activity,color:act.color,finished:false});
		}else{
			$('#actModal').modal('show');
		}
	}
}

Template.showLarge.getColor = function(day){
	switch(day.color){
		case "blue":return "info";
		case "red":return "danger";
		case "green":return "success";
		case "yellow":return "warning";
		default:return "";
	}
}

Template.showLarge.isFinished = function(obj){
	if(obj.finished===true){
		return "glyphicon glyphicon-ok";
	}
	return "";
}
