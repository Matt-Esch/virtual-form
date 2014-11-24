module.exports = button;

function button(vtree) {
    var VNode = vtree.VNode;

    return createButton;

    function createButton(properties, children, opts) {
        var key;
        var namespace;

        if (opts) {
            key = opts.key;
            namespace = opts.namespace;
        }

        return new VNode(
            'button',
            properties,
            children,
            key,
            namespace
        );
    }
}

/*

button := (
    ButtonProperties: properties,
    Array<PhrasingContent>: children,
    VNodeOpts: opts
) => VNode

type ButtonProperties := {
    accessKey: String,                  // Single character to focus the button
    autofocus: Boolean,                 // HTML5 only
    autocomplete: Boolean,              // Firefox only
    disabled: Boolean,                  // Disable the button
    form: String,                       // The form id
    formAction: FormAction,             // Override the form action
    formEncType: FormEncType,           // Override the form enc type
    formMethod: FormMethod,             // Override the form method
    formNoValidate: Boolean,            // Override the form no validate
    formTarget: Strinig | Target,       // Override the form target, must be a frame id (HTML4) or an iframe id (HTML5)
    name: String,                       // The name submitted with the form
    type: Enum(String, [                // Behavior of the button
        'submit',                       // Submits the form
        'reset',                        // Resets the form contents
        'button'                        // Does nothing on click, use events.
    ]),
    value: String                       // The button data value (not the text)
}

# Children must map to DOM nodes that inherit from PhrasingContent
# http://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0
typedef PhrasingContent := VNode

type VNodeOpts := {
    key: String,
    namespace: String
}

*/
