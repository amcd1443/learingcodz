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
    var wins: Int
    var losses: Int
    
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

    public func printRoster() {
        for player in roster {
            print("\(player.name) is on the \(self.name)")
        }
    }
    public func wonGame() {
        wins = wins + 1
    }
    
    public func lostGame() {
        self.losses = self.losses+1
    }
    
    public func printWinsAndLosses() {
        print ("\(self.name) has  \(self.wins) and \(self.losses)")
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
        print(soFarHighestPlayer.name)
    }
    
}// end Team




