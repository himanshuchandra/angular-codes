// Create a Factory or Service (Model)
        // factory must return an object
        app.factory("initcap",function(){
            var object = {}; // define an object
            object.initcapital = function(value){
                return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
            }
            return object;
        });
        