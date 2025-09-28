// stuff like my validation here. 
// validateFunctionInput(inputObject, someKeyRegexSchemaObject) > returns falsy is killer app i guess.
// validateFunctionOutput(outputObject, someKeyRegexSchemaObject) > returns different falsy is killer app here I guess

// keep those schema objects next to functions that call them

// might as well keep things pretty and drive a boilerplate perfunction 

/*
    
    //light jsdoc lift 
    functionName(inputObject){

        validateFunctionInput(inputObject, someKeyRegexSchemaObject)
        dofunctionName(validatedInputObject)
        validateFunctionOutput(outputObject, someKeyRegexSchemaObject)
        return outputObject

    }

    functionNameInputValidationSchema = {
    //these might be * for a while, until ... I make a hacker room or something to stress test self...
    // still NICE AS HELL to have key:"*", a list of keys lying around.

    }

    //heavy jsdoc lift 
    dofunctionName(inputObject){
        // do stuff
        return outputObject
    }

    functionNameOutputValidationSchema = {
    
    }

*/

// consider deep validation vs....idk why not deep/ internal architecture simplicity of management, no complex objects....ugh limit