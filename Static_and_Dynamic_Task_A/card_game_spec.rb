require 'minitest/autorun'
require_relative './card_game.rb'
require_relative './card.rb'

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("hearts", 7)
    @card3 = Card.new("diamonds", 5)
    @cards = [@card1, @card2, @card3]
    @cardgame = CardGame.new
  end

  def test_card_has_suit
    assert_equal("spades", @card1.suit)
  end

  def test_card_has_value
    assert_equal(7, @card2.value)
  end

  def test_check_for_ace_true
    assert_equal(true, @cardgame.checkforAce(@card1))
  end

  def test_check_for_ace_false
    assert_equal(false, @cardgame.checkforAce(@card2))
  end

  def test_highest_card
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 13", @cardgame.cards_total(@cards))
  end
end
