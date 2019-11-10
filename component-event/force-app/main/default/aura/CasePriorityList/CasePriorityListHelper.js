({
    setDefaultDatatableColumns: function(component) {
        var columns = [
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
            {label: 'Subject', fieldName: 'Subject', type: 'text'},
            {label: 'Status', fieldName: 'Status', type: 'text'},
            {label: 'Priority', fieldName: 'Priority', type: 'text'}
        ];
        this.setDatatableColumns(component, columns);
    },

    setDatatableColumns: function(component, columns) {
        component.set('v.columns', columns);
    },
    
    fetchCases : function(component) {
        var getCasesAction = component.get("c.getCasesWithPriority");
        getCasesAction.setParams({
            "priority" : component.get("v.priority")
        });
        
        getCasesAction.setCallback(this, function(response) {
            var state = response.getState();
            
            if (component.isValid() && state === "SUCCESS") {
                var cases = response.getReturnValue();
                component.set("v.data", cases);
            } else {
                let errors = response.getError();
                let message = 'Unknown error'; // Default error message
                // Retrieve the error message sent by the server
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    message = errors[0].message;
                }
                // Display the message
                console.error(message);
            } 
        });
        $A.enqueueAction(getCasesAction);
    },
})