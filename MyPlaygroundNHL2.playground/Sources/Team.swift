import Foundation



public enum Conference: String {
    case Atlantic
    case Metropolitan
    case Central
    case Pacific
}

public class Team {

    public var name: String
    public var roster: [Player]
    var location: String
    var conference: Conference
    public var wins: Int
    public var losses: Int
    
    public init(newTeamName: String, newTeamLocation: String, newTeamConference: Conference) {
        self.name = newTeamName
        self.location = newTeamLocation
        self.conference = newTeamConference
        self.roster = [Player]()
        self.wins = 0
        self.losses = 0
    }
    
    public func draftPlayer(newPlayer:Player) {
        roster.append(newPlayer)
    }


    public func wonGame() {
        wins = wins + 1
    }
    
    public func lostGame() {
        self.losses = self.losses+1
    }
    
    public func teamRating() -> Int {
        var totalTeamRating = 0
        for player in roster {
            totalTeamRating = totalTeamRating + player.rating
        }
        return totalTeamRating / roster.count
    }
    
    public func giveMeYourBestPlayer() -> Player {
        var soFarHighestPlayer:  Player = roster[0]
        for player in roster {
            if player.rating > soFarHighestPlayer.rating {
                soFarHighestPlayer = player
            }
        }
        return soFarHighestPlayer
    }
    

    public func sayTheNameOfYourBestPlayer() {
        var soFarHighestPlayer: Player = roster[0]
        for player in roster {
            if player.rating > soFarHighestPlayer.rating {
                soFarHighestPlayer = player
            }
        }
    }
    
}// end Team




