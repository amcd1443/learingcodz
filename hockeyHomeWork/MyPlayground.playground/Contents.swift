//: Playground - noun: a place where people can play

import Cocoa

var str = "Hello, playground, welcome to fun with strings"


func encryptString(stringToEncrypt:String) -> String {
    
    var encryptedString = ""
    
//    for letter in stringToEncrypt.characters {
    for (var i = 0; i < stringToEncrypt.characters.count; i++) {
        let letter = stringToEncrypt[i]
        
        var letterAsNumber = String(letter).unicodeScalars.first!.value
        
        letterAsNumber += 1
        
        var numberAsLetter = Character(UnicodeScalar(letterAsNumber))
       encryptedString.append(numberAsLetter)
    }
    
    
    return encryptedString
    
}


func decryptString(stringToDecrypt:String) -> String {

    var decryptedString = ""
    
    for (var i = 0; i < stringToDecrypt.characters.count; i++) {
        let letter = stringToDecrypt[i]

        var letterAsNumber = String(letter).unicodeScalars.first!.value
        
        letterAsNumber -= 1
        
        var numberAsLetter = Character(UnicodeScalar(letterAsNumber))
        
        decryptedString.append(numberAsLetter)

    }
    
    return decryptedString
    
}


var myPlainText = "hello"

var myEncryptedText = encryptString(myPlainText)

var result = decryptString(myEncryptedText)

var message = "this is how it works"

var encryptedMessage = encryptString(message)

var decryptedMessage = decryptString(encryptedMessage)



































extension String
{
    subscript(integerIndex: Int) -> Character {
        let index = startIndex.advancedBy(integerIndex)
        return self[index]
    }
    
    subscript(integerRange: Range<Int>) -> String {
        let start = startIndex.advancedBy(integerRange.startIndex)
        let end = startIndex.advancedBy(integerRange.endIndex)
        let range = start..<end
        return self[range]
    }
}
