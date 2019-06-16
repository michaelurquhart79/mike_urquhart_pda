### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
# This needs to require_relative the card.rb file

  def checkforAce(card) # method name shouldn't contain capitals and words should be separated by underscores. Method name should contain a ? at end as it returns a boolean. Function should still work though.
    if card.value = 1 # needs to be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # should be def instead of dif. Should have a comma between card1 and card2.
  if card1.value > card2.value
    return card # This should read card1
  else
    return card2
  end
end
end # this is the end for the class. It should be down below line 33.

def self.cards_total(cards) # Don't think this needs to be class method.
  total # This should read something like: total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total # This should be outside of the for loop. Where it is now will only return the value of the first card. There should probably be a space after the word of. Need to convert total to a string as it will be an integer.
  end
end
```
