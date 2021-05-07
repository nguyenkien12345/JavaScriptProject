function Validator(formSelector){
    var formRules = {};

    /*
    Quy ước tạo rules
    - Nếu có lỗi thì return `error message`
    - Nếu không có lỗi thì return `undefined`
    */
    
    // Định nghĩa các rules
    var validatorRules = {
        required: function(value){
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value){
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(vale) ? undefined : 'Vui lòng nhập đúng định dạng email';
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        },
        max: function(max){
            return function(value){
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        },
    }

    // Lấy ra form element trong DOM theo `formSelector` ra 
    var formElement = document.querySelector(formSelector);
    // console.log(formElement);

    // Nếu form tồn tại mới xử lý tiếp
    if(formElement){
        // Lấy ra các phần tử (thẻ input) trong cái formElement này với điều kiện là phải có thẻ name và thẻ rules
        var inputs = formElement.querySelectorAll('[name][rules]')
        // console.log(inputs);
        for(var input of inputs)
        {
            // Tách các rules bằng dấu |
            var rules = input.getAttribute('rules').split('|');
            // console.log(rules);
            // min:value, max:value mà ta chỉ muốn lấy ra min và max 
            for (var rule of rules)
            {
                if(rule.includes(':'))
                {
                    var ruleInfo = rule.split(':');
                    // console.log(ruleInfo);
                    rule = ruleInfo[0];
                    // console.log(rule);
                }
                if(Array.isArray(formRules[input.name]))
                {
                    formRules[input.name].push(validatorRules[rule]);
                }
                else
                {
                    formRules[input.name] = [validatorRules[rule]];
                }
            }
            // console.log(input.name); // name là 1 cái Attribute hợp lệ của thẻ input nên ta có thể .name
            // console.log(input.getAttribute('rules')); // rules là 1 cái Attribute do ta tự định nghĩa ra nên không thể .rules mà phải thông qua getAttribute
            // Key = value
            // formRules[input.name] = input.getAttribute('rules');
        }
        // console.log(formRules);
    }
}