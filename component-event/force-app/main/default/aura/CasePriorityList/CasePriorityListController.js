({
    init : function(component, event, helper) {
        helper.setDefaultDatatableColumns(component);
        helper.fetchCases(component);
    }, 
    
    handlePriorityChangedEvent : function(component, event, helper) {
        var newPriority = event.getParam("priority");
        // Update the View
        component.set("v.priority", newPriority);

        helper.fetchCases(component);
    },
})