from deck_of_cards import Deck, Card, Player, Game

d1 = Deck()
d1.build_deck()
d1.shuffle()

p1 = Player("Hao")
p2 = Player("Hayoung")
p3= Player("KG")

players = [p1, p2, p3]

game1 = Game(players, d1.deck)
game1.start_game()

while (game1.done==False):
    print(" i am in the while*****************")
    game1.play_turn()


