({
    /**
     * Given a new priority, send a component event up the containment hierarchy.
     */
	priorityChanged : function(component, event, helper) {
        
        var newPriority = component.get("v.priority");
        var priorityChangedEvent = component.getEvent("priorityChangedEvent");
        
        priorityChangedEvent.setParams({
            "priority" : newPriority
        });
        
        priorityChangedEvent.fire();
	}
})