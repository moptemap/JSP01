function send(form) {
    if(validate(form)) {
        form.submit();
    }
}

function validate(form) {
    var errorMessage = '';
    //document.getElementById('errorMessage').empty();

    var elems = form.elements;

    if(elems.lastName.value.trim() == '') {
        errorMessage += '«Фамилия» не может быть пустой<br>';
    }

    if(elems.firstName.value.trim() == '') {
        errorMessage += '«Имя» не может быть пустым<br>'
    }

    if(elems.secret.value.trim() == '') {
        errorMessage += '«Секретная фраза» не может быть пустой.<br>'
    }

    if(elems.age.value != '') {
        if(!isNumeric(elems.age.value)) {
            errorMessage += '«Возраст» измеряется только цифрами.<br>'
        }
    }

    if(!hasCkeckedAdvertising(elems.advertising)) {
        errorMessage += 'Укажите, как Вы узнали о нас.<br>';
    }

    if(document.getElementById('advertisingOther').checked) {
        if(elems.advertisingOther.value.trim() == '') {
            errorMessage += 'Отвергаешь – предлагай!';
        }
    }

    if(errorMessage != '') {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        return false;
    } else {
        return true;
    }

}

function hasCkeckedAdvertising(elems) {
    for(var i = 0; i < elems.length; i++) {
        if(elems[i].checked) {
            return true;
        }
    }
    return false;
}

function other(elem) {
    if(elem.checked) {
        document.getElementById('advertisingOtherText').disabled = false;
    } else {
        document.getElementById('advertisingOtherText').disabled = true;
    }
}


var oldSelect = document.getElementById('course').selectedIndex;
document.getElementById('otherCourses')[oldSelect].hidden = true;
function courseChange(select) {
    var otherCourse = document.getElementById('otherCourses');
    otherCourse[select.selectedIndex].hidden = true;
    otherCourse[oldSelect].hidden = false;
    otherCourse[oldSelect].selected = false;
    oldSelect = select.selectedIndex;
}

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}