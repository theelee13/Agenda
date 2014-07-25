Accounts.onCreateUser(function(options, user) {
	user.Schedules=[];
	user.activities=[];
	return user;
});
