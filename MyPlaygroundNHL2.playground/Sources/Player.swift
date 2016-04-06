import Foundation


public enum PlayerPosition:String {
    case LeftWing
    case RightWing
    case Center
    case LeftDefense
    case RightDefense
    case GoalKeeper
}

public class Player {
    
    var number: Int
    public var name: String
    let isRightHanded: Bool
    var position: PlayerPosition
    var rating: Int
    
    public init(newPlayerNumber: Int, newPlayerName: String, newPlayerIsRightHanded: Bool = true, newPlayerPosition: PlayerPosition, newPlayerRating: Int) {
        self.name = newPlayerName
        self.number = newPlayerNumber
        self.isRightHanded = newPlayerIsRightHanded
        self.position = newPlayerPosition
        self.rating = newPlayerRating
    }

    func whichHandAmI() -> String {
        if isRightHanded {
            return "right"
        } else {
            return "left"
        }
    }    
}
