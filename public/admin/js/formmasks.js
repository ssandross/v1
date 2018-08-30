function mask(value, mask, type){
    value = value.replace(/[^a-z0-9]/g, '');
    
    var valueLength = value.length-1;
    var maskLength = mask.length-1;
    var masked = '';
    var k = 0;
    
    for(i = 0; i <= maskLength; i++) {
        if (k > valueLength) break;
        if(mask[i] == '#'){
            data = formatInputData(value[k++], type);
            masked += data;
        }
        else if(mask[i] != '#')
            masked += mask[i];
    }
    return masked;
}

function formatInputData(data, format){
    if(format == '' || format == undefined)
        return data;
    
    switch(format){
        case 'string':
            return data;
        case 'integer':
            var value = parseInt(data);
            if(isNaN(value))
                value = '';
            return value;
        case 'integer-wlz':
            var value = data.replace(/[^0-9]/g, '');
            return value;
    }
}

function setMaskForms(){
    $('input[data-type]').on('input', function(){
        var data = $(this).val();
        var format = $(this).attr('data-type');
        data = formatInputData(data, format);
        $(this).val(data);
    });
    
    $('input[data-mask]').on('input', function(){
        var data = $(this).val();
        var maskType = $(this).attr('data-mask');
        switch(maskType){
            case 'cep':
                data = mask(data, '##.###-###', 'integer');
                $(this).val(data);
                break;
            case 'ssn':
                data = mask(data, '###-##-####', 'integer');
                $(this).val(data);
                break;
            case 'cpf':
                data = mask(data, '###.###.###-##', 'integer');
                $(this).val(data);
                break;
            case 'date':
                data = mask(data, '##/##/####', 'integer');
                $(this).val(data);
                break;
            case 'datetime':
                data = mask(data, '##/##/#### ##:##', 'integer');
                $(this).val(data);
                break;
            case 'time':
                data = mask(data, '##:##', 'integer');
                $(this).val(data);
                break;
            case 'phone':
                data = mask(data, '## #########', 'integer');
                $(this).val(data);
                break;
            case 'credit-card':
                data = mask(data, '#### #### #### ####', 'integer');
                $(this).val(data);
                break;
            case 'cpf':
                data = mask(data, '###.###.###-##', 'integer');
                $(this).val(data);
                break;
            case 'cnpj':
                data = mask(data, '##.###.###/####-##', 'integer');
                $(this).val(data);
                break;
            case 'card-expire':
                data = mask(data, '##/##', 'integer');
                $(this).val(data);
                break;
            case 'number':
                var value = parseInt(data);
                if(isNaN(value))
                    $(this).val('');
                else
                    $(this).val(value);
                break;
        }
    })
}
