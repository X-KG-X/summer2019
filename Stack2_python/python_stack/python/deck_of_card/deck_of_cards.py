import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return str(self.value) + " of " + self.suit


class Deck:
    def __init__(self):
        self.deck = []

    def build_deck(self):
        suits = ['hearts', 'clubs', 'spades', 'diamonds']
        values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for suit in suits:
            for value in values:
                self.deck.append(Card(suit, value))
        
    def shuffle(self):
        # implement shuffle
        random.shuffle(self.deck)



class Player :
    def __init__(self, name,call=True) :
        self.name=name
        self.cardset = []
        self.call = call
    def print_stuff(self):
        print(f"{self.name}")
        print ("{ card set : ")
        for cardito in self.cardset:
            print(f"{cardito}")
        print ("}")
        # return self.name


class Game :
    def __init__(self, players, deck) :
        self.players = players
        self.deck = deck
        self.done=False

    def givePlayerOneCard(self, player) :
        card = self.deck.pop()
        # print(card)
        player.cardset.append(card)

    def start_game(self) :
        for i in range(2):
            for player in self.players :
                self.givePlayerOneCard(player)
                # print (f"{player.print_stuff()} ")
                player.print_stuff()
        self.checkGame() # check if any player got black jack

    


    def checkGame(self) :
        x_var=len(self.players)
        for index in range(x_var) :
            if (len(self.players)==1) :
                print("stop here.")
                return
            player = self.players[index]
            if cardset_sum(player.cardset) == 21:
                self.done=True
                self.players.pop(index)
                # print(f"{player.print_stuff()} wins {cardset_sum(player.cardset)} 
                # **********")
                player.print_stuff()
                print (" --> wins")
                return
            if len(self.players)==2:
                if cardset_sum(player.cardset) > 21:
                    print(self.players.pop(index),"popopopop", len(self.players), player.name)
                    self.done=True
                    # return (f"{self.players[0].print_stuff()} player wins!**********")
                    self.players[0].print_stuff()
                    print(" --> Wins!!")
            else:
                if (cardset_sum(player.cardset)>21):
                    # self.players.pop(index)
                    print(self.players.pop(index),"popopopop", len(self.players), player.name)
                    # print(f"{player.print_stuff()} is a soreee loser**********")
                    player.print_stuff()
                    print (" --> LOSE!!")
                    return
            x_var=len(self.players)
    def play_turn(self):
        print("new turn**********")
        for player in self.players:
            
            if (self.done == False) :

                if player.call==True:
                    self.givePlayerOneCard(player)
        self.checkGame()

        if self.done == False and len(self.players)==1:
            print ("HEREHERE")
            self.done=True
            self.players[0].print_stuff()
            print (" --> Winner")
        return



card_values = { 
     "1" : 11,
     "2":2,
     "3":3, "4":4,"5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "11":10, "12":10, "13":10
 }                    
def cardset_sum(cardset):
    sum = 0
    for card in cardset :
        sum += card_values[str(card.value)]
    return sum


        


