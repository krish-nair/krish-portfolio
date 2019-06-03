$(function(){
    $('.accordion').accordion();

    //$('.submit').click(function(){
    //$('.modal').modal('show'); 
    //});

    $('.ui.rating').rating();
    
    $('.menu .item').tab();
    
    var validationObj = {
        firsName: {
            identifier: 'first-name',
            rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter your first name'
                }
            ]
        },

        lastName: {
            identifier: 'last-name',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your last name'
                }
            ]
        },

        password: {
            identifier: 'password',
            rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter a password'
                },
                {
                    type   : 'minLength[6]',
                    prompt : 'Your password must be at least {ruleValue} characters'
                }
            ]
        }
    };

    $('.form').form(validationObj, {
        inline: true,
        onSuccess: function(){
            $('.ui.modal').modal('show');
        }
    });
});
