Template.showLarge.events = {
	'click td':function(event){
		var day = event.target.id;
		if(day==="Time"){
			return;
		}
		Session.set('lastDay',day);
		Session.set('lastTime',this.Time);
		var act = Session.get('selectedActivity');
		if(act===null||act===undefined){
			return;
		}
		var sched = Session.get('thisWeek');
		var color;
		switch(event.target.className){
		case "info":
			color= "blue";
			break;
		case "success":
			color= "green";
			break;
		case "warning":
			color= "yellow";
			break;
		case "danger":
			color= "red";
			break;
		default:
			color= "white";
			break;
		}
		Session.set('chooseAct',{activity:event.target.innerText,color:color});
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
