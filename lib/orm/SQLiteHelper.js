var SQLiteHelper = {
	create: function(var database){
		var db = window.sqlitePlugin.openDatabase({name: database});
		return db;
	}, 
};
