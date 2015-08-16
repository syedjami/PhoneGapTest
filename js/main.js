var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
			
			alert('test alert 1');

			navigator.geolocation.getCurrentPosition(function(position) {
				$('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
				alert('Here is my longitude: ' + position.coords.longitude);
			},
			function() {
				alert('Error getting web location');
			});
			
        });
    },
	
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	
	initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
        self.showAlert('Store Initialized', 'Info');
    });
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
}
	
	

};

app.initialize();
