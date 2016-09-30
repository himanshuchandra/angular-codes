// Create a Factory or Service (Model)
        // factory must return an object
        app.factory("calfact",function(){
            var object = {}; // define an object
            object.addd = function(value1,value2){
                return parseInt(value1)+parseInt(value2);
            }
             object.subb = function(value1,value2){
                return value1-value2;
            }
              object.mull = function(value1,value2){
                return value1*value2;
            }
               object.divv = function(value1,value2){
                return value1/value2;
            }
            return object;
        });
        