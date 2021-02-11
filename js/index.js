$(document).ready ( function () {

    $("#convert_form").on("submit", function(e) {

        e.preventDefault();

        let input = $("#number_to_convert");
        let request_number = input.val();
        
        input.removeClass('invalid');

        if(!number_is_valid(request_number)) { 
            input.addClass("invalid");
            return false;
        }

        roman_value = covert_into_roman(request_number);
        alertify.alert(`
            <div class="result">
                <p>You asked for <b>${request_number}</b></p>
                <p>In Roman - <b>${roman_value}</b></p>
            </div>
        `).setHeader('Result');

        return false;
    });
});

const covert_into_roman = (request_number) => {
    
    const roman_num_list = {C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let roman_value = "";
    let dig_value;
    
    for(let roman_num in roman_num_list){
        dig_value = Math.floor(request_number / roman_num_list[roman_num]); 
        for(let i = 0; i < dig_value; i++){
            roman_value += roman_num; 
        }
        request_number = request_number % roman_num_list[roman_num]; 
    }
    return roman_value;
}

const number_is_valid = (request_number) => {
    if(!request_number) {
        alertify.set('notifier','position', 'bottom-center');
        alertify.error("Value can NOT be null.");
        return false;
    }
    if(request_number < 0) {
        alertify.set('notifier','position', 'bottom-center');
        alertify.error("Bye");
        $('body').html(`
            <div class="exit">
                <h1>Thanks To Visit My App I Wish You Enjoyed, Bye Bye</h1>
                <hr>
                <h3>Return To The App By Pressing The Button</h3>
                <button onclick="window.location.reload()" type="submit" class="btn">Return To The App</button>
                <div class="footer">
                    <strong>
                        By <cite title="Source Title">Abeer Zreeke</cite>
                        <br />
                        E-mail: abeer_zreeke_2@hotmail.com,
                        <br />
                        Tel: 052-4405099
                    </strong>
                </div>
            </div>
        `);
        return false;
    }
    if(request_number > 100 || request_number == 0) {
        alertify.set('notifier','position', 'bottom-center');
        alertify.error("The Input Must Be A Number Between 0-100");
        return false;
    }
    return true;
};
