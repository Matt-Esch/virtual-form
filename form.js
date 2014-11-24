module.exports = form;

function form() {
    throw new Error('Not implemented');
}

/*

form({
    enctype: form.enctype,
    method: form.method
})


form.enctype = enctype;
form.method = method;
form.id = String();
form.novalidate


type FormAction := Enum(String, {

})

type FormEnctype := Enum(String, {
    urlEncoded: 'application/x-www-form-urlencoded',
    formData: 'multipart/form-data',
    text: 'text/plain'
})

type FormMethod := Enum(String, {
    get: 'GET',
    post: 'POST'
})

type Target := Enum(String, {
    self: '_self',
    blank: '_blank',
    parent: '_parent',
    top: '_top'
})

form = (FormProperties: properties, Array<VNode>: children) => VNode



form({}, [
    fieldset(properties, [
        legend("lol")
    ])
])

function form(properties, children) {
    return new VNode('form', properties, children)
}



*/