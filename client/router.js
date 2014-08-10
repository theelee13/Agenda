Router.map(function(){
	this.route('home',{
		path: '/',
		template: 'home'
	});
	this.route('weeks',{
		path: '/schedules/:_id',
		template: 'schedulePage',
		onBeforeAction:function(){
			Session.set('thisWeek',this.params._id);
			if(this.params.activity){
				Session.set('selectedActivity',{activity:this.params.activity,color:this.params.color});
			}
		}
	});
});

Router.configure({
	layoutTemplate: 'layout_main',
});
