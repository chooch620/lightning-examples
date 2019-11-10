public with sharing class CasePriorityListController {
    @AuraEnabled
    public static List<Case> getCasesWithPriority(String priority) {
        if (Schema.sObjectType.Case.isAccessible()) {
            return [
                SELECT 
                    Id, CaseNumber, Subject, Status, Priority
                FROM
                    Case
                WHERE 
                    Priority = :priority
            ];
        } else {

            // Throw an AuraHandledException with custom data
            CustomExceptionData data = new CustomExceptionData('CANNOT_ACCESS_CASES', 'You do not have read access to the Case object. Please contact your System Administrator if this should not be happening.', 000);
            throw new AuraHandledException(JSON.serialize(data));
        }
        
    }
}